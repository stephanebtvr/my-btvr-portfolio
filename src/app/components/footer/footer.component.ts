import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { EmailLinkPipe } from '../../pipes/email-link-pipe';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, EmailLinkPipe],
  template: `
    <footer class="bg-white dark:bg-cyan-950 text-white py-8 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <div class="flex justify-center gap-6 mb-4">
          <a
            [href]="contactInfo.email | emailLink"
            class=" text-gray-600 dark:text-white hover:!text-[#b87373] transition-colors"
            aria-label="Email"
          >
            <svg class="w-6 h-6 scale-150" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </a>
          <a
            [href]="contactInfo.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-600 dark:text-white  hover:!text-[#b87373] transition-colors "
            aria-label="LinkedIn"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
          </a>
        </div>
        <p class="text-gray-400">© {{ currentYear }} Stéphane Bettaver. Tous droits réservés.</p>
      </div>
    </footer>
  `,
  styles: [],
})
export class FooterComponent implements OnInit {
  contactInfo: any;
  currentYear = new Date().getFullYear();

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.contactInfo = this.portfolioService.getContactInfo();
  }
}
