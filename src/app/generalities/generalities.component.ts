import { OpenPdfService } from './../open-pdf.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generalities',
  templateUrl: './generalities.component.html',
  styleUrls: ['./generalities.component.scss']
})
export class GeneralitiesComponent implements OnInit {

  constructor(
    private openPdfServ: OpenPdfService
  ) { }

  ngOnInit(): void {
  }

  openPdf(pdf: string) {
      this.openPdfServ.openPdf(pdf);
  }

}
