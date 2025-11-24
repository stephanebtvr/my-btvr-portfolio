import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, HomeComponent],
  template: `<div class="min-h-screen bg-gray-50 dark:bg-cyan-950">
    <app-header></app-header>

    <main class="pt-16">
      <app-home></app-home>
    </main>

    <app-footer></app-footer>
  </div> `,
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('my-great-porfolio');
}
