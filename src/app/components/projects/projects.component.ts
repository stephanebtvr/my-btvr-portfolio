// src/app/components/projects/projects.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Project } from '../../models/portfolio.models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      id="projets"
      class="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:!bg-gray-900 transition-all duration-500 scroll-mt-20 min-h-screen"
    >
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mes <span class="gradient-text">Projets</span>
          </h2>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Applications web, mobile et outils que j'ai développés
          </p>
        </div>

        <!-- Grid de cartes projets -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for(project of projects; track project.title; let i = $index) {
          <div class="relative group">
            <!-- Carte projet -->
            <div
              class="project-card relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 overflow-hidden "
            >
              <!-- Image -->
              <div class="relative mb-5 overflow-hidden rounded-xl">
                <div
                  class="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center"
                >
                  @if (project.image) {
                  <img
                    [src]="project.image"
                    alt="{{ project.title }}"
                    class="w-full h-full object-cover"
                  />
                  } @else {
                  <svg
                    class="w-16 h-16 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  }
                </div>
                <!-- Badge "En cours" ou "Terminé" -->
                @if (project.status) {
                <span
                  class="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold"
                  [ngClass]="{
                    'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200':
                      project.status === 'terminé',
                    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200':
                      project.status === 'en cours'
                  }"
                >
                  {{ project.status }}
                </span>
                }
              </div>

              <!-- Contenu -->
              <div class="relative z-10">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {{ project.title }}
                </h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {{ project.shortDescription }}
                </p>

                <!-- Tags -->
                <div class="flex flex-wrap gap-2 mb-4">
                  @for(tag of project.tags; track tag; let last = $last) {
                  <span
                    class="tag-badge inline-flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-bordeaux/5 to-rougebrique/5 dark:from-rougebrique/10 dark:to-bordeaux/10 text-bordeaux dark:text-rougebrique rounded-md text-xs font-semibold border border-bordeaux/10 dark:border-rougebrique/20 transition-all duration-300 hover:scale-105"
                  >
                    {{ tag }}
                  </span>
                  }
                </div>

                <!-- Description expandable -->
                <div
                  #descContainer
                  class="overflow-hidden transition-all duration-500 ease-in-out"
                  [style.max-height.px]="project.isExpanded ? descContainer.scrollHeight : 0"
                >
                  <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mt-3">
                    {{ project.fullDescription }}
                  </p>
                  @if (project.links) {
                  <div class="flex gap-3 mt-4">
                    @if (project.links.github) {
                    <a
                      [href]="project.links.github"
                      target="_blank"
                      class="inline-flex items-center gap-2 text-bordeaux dark:text-rougebrique hover:gap-3 transition-all text-sm font-medium"
                    >
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                        />
                      </svg>
                      GitHub
                    </a>
                    } @if (project.links.live) {
                    <a
                      [href]="project.links.live"
                      target="_blank"
                      class="inline-flex items-center gap-2 text-bordeaux dark:text-rougebrique hover:gap-3 transition-all text-sm font-medium"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Live
                    </a>
                    }
                  </div>
                  }
                </div>

                <!-- Bouton Voir plus/moins -->
                <button
                  (click)="toggleProject(project)"
                  class="mt-4 inline-flex items-center gap-2 text-bordeaux dark:text-rougebrique font-semibold text-sm hover:gap-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-bordeaux/20 dark:focus:ring-rougebrique/20 rounded-lg px-2 py-1 -ml-2"
                  [attr.aria-expanded]="project.isExpanded"
                >
                  <span>{{ project.isExpanded ? 'Voir moins' : 'Voir plus' }}</span>
                  <svg
                    class="w-5 h-5 transition-transform duration-300"
                    [class.rotate-180]="project.isExpanded"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              <!-- Effet de bordure gradient au hover -->
              <div
                class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style="background: linear-gradient(135deg, rgba(185, 28, 28, 0.1), rgba(153, 27, 27, 0.1));"
              ></div>

              <!-- Coin décoratif -->
              <div
                class="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none overflow-hidden rounded-tr-2xl"
              >
                <svg viewBox="0 0 100 100" class="w-full h-full">
                  <circle cx="100" cy="0" r="80" class="fill-bordeaux dark:fill-rougebrique" />
                </svg>
              </div>
            </div>
          </div>
          }
        </div>

        <!-- Bouton "Voir tous les projets" -->
        <!-- <div class="text-center mt-12">
          <a routerLink="/projets" class="btn-primary inline-flex items-center gap-2">
            D'autres projets en cours...
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div> -->
      </div>
    </section>
  `,
  styles: [
    `
      .project-card::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 1rem;
        padding: 2px;
        background: linear-gradient(135deg, rgba(185, 28, 28, 0.1), rgba(153, 27, 27, 0.1));
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        opacity: 0;
        transition: opacity 0.3s;
      }

      .project-card:hover::before {
        opacity: 1;
      }

      .tag-badge {
        position: relative;
        overflow: hidden;
      }

      .tag-badge::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), transparent);
        opacity: 0;
        transition: opacity 0.3s;
      }

      .tag-badge:hover::after {
        opacity: 1;
      }

      /* Animation d'apparition */
      .project-card {
        animation: fadeInUp 0.5s ease-out backwards;
      }

      @for $i from 1 through 9 {
        .project-card:nth-child(#{$i}) {
          animation-delay: #{$i * 0.1}s;
        }
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `,
  ],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.projects = this.portfolioService.getProjects();
  }

  toggleProject(project: Project): void {
    project.isExpanded = !project.isExpanded;
  }
}
