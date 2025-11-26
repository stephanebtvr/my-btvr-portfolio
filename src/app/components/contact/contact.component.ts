import { Component, OnInit, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { ContactInfo } from '../../models/portfolio.models';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, PhoneFormatPipe, DownloadCvComponent],
  template: `
    <section
      id="contact"
      class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:!bg-cyan-950 transition-all duration-500 scroll-mt-20"
    >
      <div class="max-w-4xl mx-auto text-center py-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4 dark:text-white">
          Travaillons <span class="gradient-text">Ensemble</span>
        </h2>
        <p class="text-gray-600 mb-12 max-w-2xl mx-auto dark:text-gray-400">
          Vous avez un projet stimulant ? Je suis disponible pour discuter de nouvelles
          opportunités.
        </p>

        <div class="grid md:grid-cols-3 gap-8 mb-12">
          <!-- Email -->
          <div class="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-5">
            <div
              class="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">Email</h3>
            <a
              [href]="'mailto:' + contactInfo.email"
              class="text-purple-600 hover:text-purple-700 break-all"
            >
              {{ contactInfo.email }}
            </a>
          </div>

          <!-- Téléphone -->
          <div class="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-5">
            <div
              class="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                />
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">Téléphone</h3>
            <a [href]="'tel:' + contactInfo.phone" class="text-purple-600 hover:text-purple-700">
              {{ contactInfo.phone | phoneFormat }}
            </a>
          </div>

          <!-- Localisation -->
          <div class="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-5">
            <div
              class="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">Localisation</h3>
            <p class="text-gray-600">{{ contactInfo.location }}</p>
          </div>
        </div>
        <div class="flex flex-wrap justify-center gap-4">
          <a
            [href]="'mailto:' + contactInfo.email"
            class="inline-block gradient-bg text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all text-lg"
          >
            Contactez-moi
          </a>
          <app-download-cv />
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class ContactComponent implements OnInit {
  contactInfo!: ContactInfo;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.contactInfo = this.portfolioService.getContactInfo();
  }
}

// Pipe pour formater le numéro de téléphone
import { Pipe, PipeTransform } from '@angular/core';
import { PhoneFormatPipe } from '../../pipes/phone-format-pipe';
import { MatButton } from '@angular/material/button';
import { DownloadCvComponent } from '../download/download-cv/download-cv.component';
