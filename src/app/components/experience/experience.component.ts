// src/app/components/experience/experience.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Experience } from '../../models/portfolio.models';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      id="experience"
      class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:!bg-cyan-950 transition-all duration-500 scroll-mt-20"
    >
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Expérience <span class="gradient-text">Professionnelle</span>
          </h2>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Mon parcours professionnel entre développement logiciel et ingénierie industrielle
          </p>
        </div>

        <!-- Timeline Container -->
        <div class="relative">
          <!-- Timeline Line - Centrée et plus visible -->
          <div
            class="absolute left-8 md:left-11 top-0 bottom-0 w-0.5 bg-gradient-to-b from-bordeaux via-rougebrique to-bordeaux dark:from-rougebrique dark:via-bordeaux dark:to-rougebrique"
          ></div>

          <!-- Experience Cards -->
          <div class="space-y-8">
            @for(exp of experiences; track exp.title; let i = $index) {
            <div class="relative pl-16 md:pl-24 group">
              <!-- Timeline Dot avec animation -->
              <div
                class="absolute left-6 md:left-9 top-8 w-5 h-5 rounded-full bg-white dark:bg-gray-900 border-4 border-bordeaux dark:border-rougebrique z-10 transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-bordeaux/50 dark:group-hover:shadow-rougebrique/50"
              >
                <!-- Inner glow effect -->
                <div
                  class="absolute inset-0 rounded-full bg-bordeaux dark:bg-rougebrique opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-300"
                ></div>
              </div>

              <!-- Experience Card -->
              <div
                class="experience-card relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 transition-all duration-300 hover:shadow-2xl border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600"
              >
                <!-- Gradient overlay subtil -->
                <div
                  class="absolute inset-0 rounded-2xl bg-gradient-to-br from-bordeaux/5 to-rougebrique/5 dark:from-rougebrique/5 dark:to-bordeaux/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                ></div>

                <!-- Header -->
                <div class="relative z-10 flex flex-wrap items-start justify-between mb-4 gap-4">
                  <div class="flex-1 min-w-0">
                    <h3
                      class="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300"
                    >
                      {{ exp.title }}
                    </h3>
                    <p
                      class="text-bordeaux dark:text-rougebrique font-semibold text-lg flex items-center gap-2"
                    >
                      <svg
                        class="w-5 h-5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                      {{ exp.company }}
                    </p>
                  </div>

                  <!-- Period Badge -->
                  <div class="flex flex-col items-end gap-2">
                    <span
                      class="bg-gradient-to-r from-bordeaux/10 to-rougebrique/10 dark:from-rougebrique/20 dark:to-bordeaux/20 text-bordeaux dark:text-rougebrique px-4 py-2 rounded-xl text-sm font-semibold border border-bordeaux/20 dark:border-rougebrique/30 whitespace-nowrap"
                    >
                      {{ exp.period }}
                    </span>
                    <span class="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-1">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {{ exp.location }}
                    </span>
                  </div>
                </div>

                <!-- Description Expandable -->
                <div class="relative z-10">
                  <div
                    #descContainer
                    class="overflow-hidden transition-all duration-500 ease-in-out"
                    [style.max-height.px]="exp.isExpanded ? descContainer.scrollHeight : 0"
                  >
                    <ul class="space-y-3 text-gray-700 dark:text-gray-300 mt-4">
                      @for(item of exp.description; track item) {
                      <li class="flex items-start gap-3 group/item">
                        <div class="flex-shrink-0 mt-1">
                          <div
                            class="w-6 h-6 rounded-full bg-gradient-to-br from-bordeaux to-rougebrique dark:from-rougebrique dark:to-bordeaux flex items-center justify-center transition-transform duration-300 group-hover/item:scale-110"
                          >
                            <svg
                              class="w-3.5 h-3.5 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                        <span class="flex-1 leading-relaxed">{{ item }}</span>
                      </li>
                      }
                    </ul>
                  </div>

                  <!-- Toggle Button -->
                  <button
                    (click)="toggleExperience(exp)"
                    class="mt-4 inline-flex items-center gap-2 text-bordeaux dark:text-rougebrique font-semibold text-sm hover:gap-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-bordeaux/20 dark:focus:ring-rougebrique/20 rounded-lg px-2 py-1 -ml-2"
                    [attr.aria-expanded]="exp.isExpanded"
                    [attr.aria-label]="
                      exp.isExpanded ? 'Masquer les détails' : 'Afficher les détails'
                    "
                  >
                    <span>{{ exp.isExpanded ? 'Voir moins' : 'Voir plus' }}</span>
                    <svg
                      class="w-5 h-5 transition-transform duration-300"
                      [class.rotate-180]="exp.isExpanded"
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

                <!-- Tags -->
                @if(exp.tags && exp.tags.length > 0) {
                <div
                  class="relative z-10 flex flex-wrap gap-2 mt-6 pt-6 border-t border-gray-100 dark:border-gray-700"
                >
                  @for(tag of exp.tags; track tag) {
                  <span
                    class="tag-badge group/tag inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-bordeaux/5 to-rougebrique/5 dark:from-rougebrique/10 dark:to-bordeaux/10 text-bordeaux dark:text-rougebrique rounded-lg text-xs font-semibold border border-bordeaux/10 dark:border-rougebrique/20 transition-all duration-300 hover:scale-105 hover:shadow-md hover:border-bordeaux/30 dark:hover:border-rougebrique/40"
                  >
                    {{ tag }}
                  </span>
                  }
                </div>
                }

                <!-- Decorative corner element -->
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
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      /* Card border animation sur hover */
      .experience-card::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 1rem;
        padding: 2px;
        background: linear-gradient(
          135deg,
          var(--tw-gradient-from, transparent),
          var(--tw-gradient-via, rgba(185, 28, 28, 0.1)),
          var(--tw-gradient-to, transparent)
        );
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      .experience-card:hover::before {
        opacity: 1;
      }

      /* Tag hover effect */
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

      /* Smooth transitions pour le contenu expandable */
      ul li {
        animation: fadeInUp 0.3s ease-out backwards;
      }

      @for $i from 1 through 10 {
        ul li:nth-child(#{$i}) {
          animation-delay: #{$i * 0.05}s;
        }
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* Focus visible pour accessibilité */
      button:focus-visible {
        outline: 2px solid currentColor;
        outline-offset: 4px;
      }
    `,
  ],
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.experiences = this.portfolioService.getExperiences();
  }

  toggleExperience(exp: Experience): void {
    exp.isExpanded = !exp.isExpanded;
  }
}
