import { Component, OnInit } from '@angular/core';
import { LangagesService } from '../langages.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private languageServ: LangagesService
  ) { }

  ngOnInit(): void {
  }

  switchLanguage(language: string) {
    this.languageServ.switchLanguage(language);
  }
}
