import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('my-great-porfolio');
}
