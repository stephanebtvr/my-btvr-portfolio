import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav
      class="bg-white dark:bg-cyan-950 shadow-sm fixed w-full top-0 z-50 transition-colors duration-300"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <a routerLink="/" class="text-2xl font-bold gradient-text">SB</a>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex space-x-8">
            <a
              routerLink="/"
              routerLinkActive="active-link"
              [routerLinkActiveOptions]="{ exact: true }"
              class="nav-link"
              >Accueil</a
            >
            <!-- <a routerLink="/skills" routerLinkActive="active-link" class="nav-link">À propos</a> -->
            <a routerLink="/skills" routerLinkActive="active-link" class="nav-link">Compétences</a>
            <a routerLink="/experience" routerLinkActive="active-link" class="nav-link"
              >Expérience</a
            >
            <a routerLink="/projects" routerLinkActive="active-link" class="nav-link">Projets</a>

            <a routerLink="/contact" routerLinkActive="active-link" class="nav-link">Contact</a>
          </div>

          <!-- Right Side Actions -->
          <div class="flex items-center gap-2">
            <!-- Theme Toggle Button -->
            <button
              (click)="themeService.toggle()"
              class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Changer le thème"
            >
              <svg
                class="w-6 h-6 text-gray-700 dark:text-gray-300"
                [class.hidden]="themeService.theme() === 'dark'"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
              <svg
                class="w-6 h-6 fill-jaunechaud"
                [class.hidden]="themeService.theme() === 'light'"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                />
              </svg>
            </button>

            <!-- Mobile Menu Button (Burger) -->
            <button
              (click)="toggleMobileMenu()"
              class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Menu de navigation"
              [attr.aria-expanded]="isMobileMenuOpen"
            >
              <svg
                class="w-6 h-6 text-gray-700 dark:text-gray-300 transition-transform duration-300"
                [class.rotate-90]="isMobileMenuOpen"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <!-- Hamburger Icon -->
                @if(!isMobileMenuOpen) {
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                } @else {
                <!-- Close Icon -->
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
                }
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        class="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
        [class.max-h-0]="!isMobileMenuOpen"
        [class.max-h-96]="isMobileMenuOpen"
      >
        <div
          class="px-4 pt-2 pb-4 space-y-1 bg-gray-50 dark:bg-gray-900/95 border-t border-gray-200 dark:border-gray-700"
        >
          @for(link of navLinks; track link.id) {
          <a
            [routerLink]="link.route"
            routerLinkActive="mobile-link-active"
            [routerLinkActiveOptions]="{ exact: link.id === 'accueil' }"
            (click)="closeMobileMenu()"
            class="mobile-nav-link block px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 font-medium hover:bg-white dark:hover:bg-gray-800 hover:text-bordeaux dark:hover:text-rougebrique transition-all duration-200"
          >
            <div class="flex items-center gap-3">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  [attr.d]="link.icon"
                />
              </svg>
              {{ link.label }}
            </div>
          </a>
          }
        </div>
      </div>
    </nav>

    <!-- Overlay pour fermer le menu en cliquant à l'extérieur -->
    @if(isMobileMenuOpen) {
    <div
      class="fixed inset-0 bg-black/20 dark:bg-black/40 z-40 md:hidden backdrop-blur-sm"
      (click)="closeMobileMenu()"
      [@fadeIn]
    ></div>
    }
  `,
  styles: [
    `
      .active-link {
        @apply text-bordeaux dark:text-rougebrique;
      }

      .active-link::after {
        @apply w-full;
      }

      .mobile-link-active {
        @apply bg-white dark:bg-gray-800 text-bordeaux dark:text-rougebrique shadow-sm;
      }

      .mobile-nav-link {
        position: relative;
      }

      .mobile-nav-link::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 3px;
        height: 0;
        background: linear-gradient(to bottom, var(--tw-gradient-from), var(--tw-gradient-to));
        @apply from-bordeaux to-rougebrique;
        border-radius: 0 2px 2px 0;
        transition: height 0.3s ease;
      }

      .mobile-link-active::before {
        height: 70%;
      }

      /* Animation pour le menu mobile */
      @keyframes slideDown {
        from {
          opacity: 0;
          transform: translateY(-10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .mobile-nav-link {
        animation: slideDown 0.3s ease-out backwards;
      }

      .mobile-nav-link:nth-child(1) {
        animation-delay: 0.05s;
      }
      .mobile-nav-link:nth-child(2) {
        animation-delay: 0.1s;
      }
      .mobile-nav-link:nth-child(3) {
        animation-delay: 0.15s;
      }
      .mobile-nav-link:nth-child(4) {
        animation-delay: 0.2s;
      }
      .mobile-nav-link:nth-child(5) {
        animation-delay: 0.25s;
      }
      .mobile-nav-link:nth-child(6) {
        animation-delay: 0.3s;
      }
    `,
  ],
})
export class HeaderComponent {
  themeService = inject(ThemeService);
  isMobileMenuOpen = false;

  navLinks = [
    {
      id: 'accueil',
      label: 'Accueil',
      route: '/',
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    },
    {
      id: 'apropos',
      label: 'À propos',
      route: '/apropos',
      icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    },
    {
      id: 'competences',
      label: 'Compétences',
      route: '/skills',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    },
    {
      id: 'projects',
      label: 'Projets',
      route: '/projects',
      icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    },
    {
      id: 'experience',
      label: 'Expérience',
      route: '/experience',
      icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    },
    {
      id: 'contact',
      label: 'Contact',
      route: '/contact',
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    },
  ];

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    this.closeMobileMenu();

    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Hauteur du header fixe
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }
}
