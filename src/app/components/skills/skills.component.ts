// src/app/components/skills/skills.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { SkillCategory } from '../../models/portfolio.models';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <section
      id="competences"
      class="py-20 px-4 sm:px-6 lg:px-8 bg-white  dark:!bg-gray-900 transition-all duration-500 scroll-mt-20"
    >
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4 dark:text-white">
            Compétences <span class="gradient-text">Techniques</span>
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto dark:text-gray-400">
            Technologies et outils que je maîtrise pour créer des applications performantes et
            modernes
          </p>
        </div>

        <!-- Grande cards par catégorie -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for(category of skillCategories; track category.title; let i = $index) {
          <div
            class="category-card group relative bg-white dark:bg-gray-800 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl border border-gray-100 dark:border-gray-700"
          >
            <!-- Gradient overlay subtil -->
            <div
              class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"
              [ngClass]="getIconGradient(i)"
            ></div>

            <!-- Header de la catégorie -->
            <div class="flex items-center gap-3 mb-6">
              <div
                class="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                [ngClass]="getIconGradient(i)"
              >
                <svg
                  class="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    [attr.d]="category.icon"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                {{ category.title }}
              </h3>
            </div>

            <!-- Mini-cards des skills à l'intérieur -->
            <div class="grid grid-cols-2 gap-3">
              @for(skill of category.skills; track skill.name){
              <div
                class="skill-mini-card relative bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-gray-200 dark:hover:border-gray-600 flex flex-col items-center justify-center gap-2 min-h-[100px] group/skill cursor-pointer"
                [style.--skill-hover-color]="skill.hoverColor || '#3b82f6'"
              >
                <!-- Icon -->
                @if (!skill.type && skill.icon) {
                <div
                  class="text-2xl transition-transform duration-300 group-hover/skill:scale-110 z-10 relative"
                >
                  <i [class]="skill.icon" [style.color]="skill.hoverColor || '#3b82f6'"></i>
                </div>
                } @else if (skill.icon && skill.type === 'mat-icon') {
                <mat-icon
                  [svgIcon]="skill.icon"
                  class="w-6 h-6"
                  [style.color]="skill.hoverColor || '#3b82f6'"
                ></mat-icon>
                } @else if (skill.type === 'png' && skill.icon) {
                <img
                  [src]="'/assets/icons/' + skill.icon + '.png'"
                  [alt]="skill.name"
                  class="w-12 h-12 object-contain transition-transform duration-300 group-hover/skill:scale-110"
                  loading="lazy"
                />
                }

                <!-- Skill Name -->
                <span
                  class="text-xs font-semibold text-gray-700 dark:text-gray-300 text-center leading-tight z-10 relative"
                >
                  {{ skill.name }}
                </span>

                <!-- Background coloré au hover -->
                <div
                  class="skill-hover-bg absolute inset-0 rounded-lg opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"
                ></div>

                <!-- Shine effect on hover -->
                <div
                  class="shine absolute inset-0 rounded-lg opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 pointer-events-none overflow-hidden"
                >
                  <div
                    class="shine-effect absolute inset-0 -translate-x-full group-hover/skill:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  ></div>
                </div>
              </div>
              }
            </div>

            <!-- Decorative corner element -->
            <div
              class="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
            >
              <svg viewBox="0 0 100 100" class="w-full h-full">
                <circle cx="100" cy="0" r="70" [attr.fill]="getCategoryColor(i)" />
              </svg>
            </div>
          </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      /* Card border animation */
      .category-card::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 1rem;
        padding: 2px;
        background: linear-gradient(135deg, transparent, rgba(99, 102, 241, 0.1));
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        opacity: 0;
        transition: opacity 0.3s;
      }

      .category-card:hover::before {
        opacity: 1;
      }

      /* Skill mini-card effects */
      .skill-mini-card::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 0.5rem;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent);
        opacity: 0;
        transition: opacity 0.3s;
        pointer-events: none;
      }

      .skill-mini-card:hover::after {
        opacity: 1;
      }

      /* Background hover avec la couleur du skill */
      .skill-hover-bg {
        background-color: color-mix(in srgb, var(--skill-hover-color) 15%, transparent);
      }

      /* Alternative pour les navigateurs qui ne supportent pas color-mix */
      @supports not (background-color: color-mix(in srgb, white 50%, black)) {
        .skill-hover-bg {
          background-color: var(--skill-hover-color);
          opacity: 0.15;
        }
      }

      /* Dark mode adjustments */
      :host-context(.dark) .skill-hover-bg {
        background-color: color-mix(in srgb, var(--skill-hover-color) 20%, transparent);
      }

      @supports not (background-color: color-mix(in srgb, white 50%, black)) {
        :host-context(.dark) .skill-hover-bg {
          opacity: 0.2;
        }
      }
    `,
  ],
})
export class SkillsComponent implements OnInit {
  skillCategories: SkillCategory[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.skillCategories = this.portfolioService.getSkillCategories();
  }

  getIconGradient(index: number): string {
    const gradients = [
      'gradient-bg',
      'bg-gradient-to-br from-green-500 to-teal-500',
      'bg-gradient-to-br from-orange-500 to-red-500',
      'bg-gradient-to-br from-blue-500 to-indigo-500',
      'bg-gradient-to-br from-yellow-500 to-amber-500',
      'bg-gradient-to-br from-pink-500 to-rose-500',
    ];
    return gradients[index] || 'gradient-bg';
  }

  getCategoryColor(index: number): string {
    const colors = ['#667eea', '#10b981', '#f97316', '#3b82f6', '#fbbf24', '#ec4899'];
    return colors[index % colors.length];
  }
}
