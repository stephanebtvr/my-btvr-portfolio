import { Component, inject, signal } from '@angular/core';
import { CvService } from '../../../services/cv.service';
import html2pdf from 'html2pdf.js';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-download-cv',
  imports: [],
  standalone: true,
  template: `
    <button
      class="bg-white dark:bg-gray-800 text-bordeaux dark:text-rougebrique 
                   px-8 py-4 rounded-lg font-semibold border-2 border-bordeaux dark:border-rougebrique 
                   hover:bg-purple-50 dark:hover:bg-gray-700 transition-all duration-300"
      [disabled]="isLoading()"
      (click)="downloadPdf()"
    >
      @if(isLoading()){
      <span class="flex items-center gap-2">
        <span
          class="inline-block w-6 h-6 border-2 border-t-transparent border-bordeaux dark:border-white rounded-full animate-spin dark:animate-spin-white"
        ></span>
        <span class="leading-none">Génération du PDF...</span> </span
      >} @else{Télécharger mon CV}
    </button>
  `,
})
export class DownloadCvComponent {
  private cvService = inject(CvService);
  cvHtml = this.cvService.cvHtml;
  public isLoading = signal(false);

  public async downloadPdf() {
    this.isLoading.set(true);
    await this.cvService.downloadPdf();
    this.isLoading.set(false);
  }
}
