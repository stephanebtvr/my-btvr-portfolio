// src/app/services/icon.service.ts
import { inject, Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  private matIconRegistry = inject(MatIconRegistry);
  private domSanitizer = inject(DomSanitizer);

  constructor() {}

  registerIcons() {
    const icons = ['rest', 'soap', 'mvc', 'soapui', 'tdd', 'kanban', 'scrum', 'microservice'];
    icons.forEach((icon) =>
      this.matIconRegistry.addSvgIcon(
        icon,
        // this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${icon}.svg`)
        this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/${icon}.svg`)
      )
    );
  }
}
