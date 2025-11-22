// cv.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CvService {
  private http = inject(HttpClient);
  private cvName = 'CV_BETTAVER';

  private readonly cvHtml$ = this.http.get(`/assets/cv/${this.cvName}.html`, {
    responseType: 'text',
  });
  // Signal réactif du HTML du CV
  public cvHtml = toSignal(this.cvHtml$, { initialValue: '' });

  public downloadPdf() {
    const link = document.createElement('a');
    link.href = `/assets/cv/${this.cvName}.pdf`;
    link.download = 'CV_BETTAVER.pdf';
    link.click();
  }
}
