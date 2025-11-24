// src/app/services/scroll-spy.service.ts
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollSpyService {
  // Signal pour la section active
  activeSection = signal<string>('accueil');

  private observer: IntersectionObserver | null = null;

  /**
   * Initialise l'observation des sections
   * @param sectionIds - Liste des IDs de sections à observer
   */
  initScrollSpy(sectionIds: string[]): void {
    // Nettoyage de l'observer précédent
    this.cleanup();

    // Configuration de l'Intersection Observer
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '-80px 0px -80% 0px', // Offset pour le header + zone de détection
      threshold: 0,
    };

    this.observer = new IntersectionObserver((entries) => {
      // Filtre les entrées visibles
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);

      if (visibleEntries.length > 0) {
        // Prend la première section visible
        const topEntry = visibleEntries[0];
        const sectionId = topEntry.target.id;
        this.activeSection.set(sectionId);

        // Met à jour l'URL sans recharger la page
        window.history.replaceState(null, '', `#${sectionId}`);
      }
    }, options);

    // Observer toutes les sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element && this.observer) {
        this.observer.observe(element);
      }
    });
  }

  /**
   * Nettoie l'observer
   */
  cleanup(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }

  /**
   * Scroll vers une section
   */
  //   scrollToSection(sectionId: string): void {
  //     const element = document.getElementById(sectionId);
  //     if (element) {
  //       const headerOffset = 80;
  //       const elementPosition = element.getBoundingClientRect().top;
  //       const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  //       window.scrollTo({
  //         top: offsetPosition,
  //         behavior: 'smooth',
  //       });

  //       // Met à jour immédiatement la section active
  //       this.activeSection.set(sectionId);
  //     }
  //   }

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    this.activeSection.set(sectionId);
  }
}
