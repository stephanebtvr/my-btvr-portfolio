import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { IconService } from './services/icons.service';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top', // Remonte en haut à chaque navigation
        anchorScrolling: 'enabled', // Active le scroll vers #experience
        // Note: scrollOffset is not part of InMemoryScrollingOptions; handle header offset via CSS
        // (e.g. use `scroll-margin-top: 80px` on target elements) or a custom scroll handler.
      })
    ),
    // provideAppInitializer(
    //   // Fournit la fonction d'initialisation (injecte le service via factory)
    //   () => inject(IconService).registerIcons()
    // ),

    // INITIALIZER SÉCURISÉ
    provideAppInitializer(() => {
      const iconService = inject(IconService);
      try {
        console.log('Registering custom icons...');
        iconService.registerIcons();
        console.log('Icons registered successfully');
      } catch (error) {
        console.error('Failed to register icons:', error);
        // Ne bloque PAS le bootstrap
      }
    }),
  ],
};
