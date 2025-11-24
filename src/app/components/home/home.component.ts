import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { SkillsComponent } from '../skills/skills.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ContactComponent } from '../contact/contact.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ScrollSpyService } from '../../services/scroll-spy.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SkillsComponent,
    ExperienceComponent,
    ContactComponent,
    ProjectsComponent,
  ],
  template: `
    <section
      id="accueil"
      class=" relative  pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center 
         bg-gradient-to-br from-purple-50 to-blue-50 
         dark:bg-gradient-to-br dark:from-cyan-950  dark:to-cyan-950 
         transition-all duration-500"
    >
      <div class="max-w-7xl mx-auto w-full flex items-center justify-center">
        <div class="grid md:grid-cols-2 gap-12 items-center w-full">
          <!-- === TEXTE === -->
          <div class="animate-slideIn">
            <p class="text-bordeaux dark:text-rougebrique font-semibold mb-2">Bonjour, je suis</p>
            <h1 class="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Stéphane<br />
              <span class="gradient-text">Bettaver</span>
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Développeur Full Stack Java / Angular
            </p>
            <p class="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Ingénieur industriel reconverti en développeur Full Stack, j'apporte 3 ans
              d'expérience en IT et développement Java/Angular ainsi qu'un background de 4 ans en
              ingénierie industrielle et gestion de projets Lean.
            </p>

            <!-- === BOUTONS === -->
            <div class="flex flex-wrap gap-4">
              <a
                href="#contact"
                class="gradient-bg text-white px-8 py-3 rounded-lg font-semibold 
       flex items-center justify-center
       hover:shadow-xl hover:scale-105 transition-all duration-300
       min-h-[56px]"
              >
                Me Contacter
              </a>

              <a
                href="#experience"
                class="bg-white dark:bg-gray-800 text-bordeaux dark:text-rougebrique 
       px-8 py-3 rounded-lg font-semibold border-2 border-bordeaux dark:border-rougebrique 
       flex items-center justify-center
       hover:bg-purple-50 dark:hover:bg-gray-700 transition-all duration-300
       min-h-[56px]"
              >
                Voir mon CV
              </a>
            </div>

            <!-- === RÉSEAUX SOCIAUX === -->
            <div class="flex gap-6 mt-8">
              @for (social of socialLinks; track social.name) {

              <a
                [href]="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-600 dark:text-gray-300 hover:text-bordeaux transition-colors duration-300"
                [attr.aria-label]="social.name"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path [attr.d]="social.icon" />
                </svg>
              </a>
              } @empty {
              <p class="text-gray-500">Aucun réseau social configuré</p>
              }
            </div>
          </div>

          <!-- === IMAGE / CERCLE DÉGRADÉ === -->
          <div class="hidden md:flex justify-center">
            <div class="relative">
              <!-- Cercle dégradé en arrière-plan -->
              <div
                class="w-80 h-80 gradient-bg rounded-full opacity-20 
                   absolute top-10 left-10 blur-3xl 
                   dark:opacity-100"
              ></div>
              <!-- Carte centrale -->
              <div
                class="w-96 h-96 bg-white dark:gradient-bg rounded-2xl shadow-2xl 
                   flex items-center justify-center relative z-10 
                   border border-gray-200 dark:border-gray-700"
              >
                <svg
                  class="w-48 h-48 text-bordeaux dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="absolute inset-x-0 bottom-8 flex justify-center pointer-events-none z-10">
        <button
          (click)="scrollToSection('competences')"
          class="pointer-events-auto animate-bounce 
           bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm
           rounded-full p-4 shadow-2xl border border-gray-200 dark:border-gray-700
           hover:scale-110 transition-all duration-300"
          aria-label="Voir mes compétences"
        >
          <i class="fa-solid fa-angles-down text-xl text-rougebrique"></i>
        </button>
      </div>
    </section>

    <app-skills id="competences"></app-skills>
    <app-experience id="experience"></app-experience>
    <app-projects id="projects"></app-projects>
    <app-contact id="contact"></app-contact>
  `,
  styles: [
    `
      .animate-slideIn {
        animation: slideIn 0.8s ease-out forwards;
      }

      .animate-slideIn.play {
        animation: slideIn 0.8s ease-out forwards;
      }

      @keyframes slideIn {
        from {
          opacity: 0;
          transform: translateX(-50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
    `,
  ],
})
export class HomeComponent {
  portfolioService = inject(PortfolioService);
  scrollSpyService = inject(ScrollSpyService);

  scrollToSection(sectionId: string) {
    this.scrollSpyService.activeSection.set(sectionId);
  }

  public socialLinks = this.portfolioService.getSocialLinks();
}
