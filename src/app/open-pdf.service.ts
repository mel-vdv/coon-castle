import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenPdfService {

  constructor() { }

  openPdf(pdf: string) {
    window.open('assets/pdf/' + pdf +'.pdf');
  }

}
