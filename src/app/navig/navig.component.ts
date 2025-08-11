import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigService } from '../navig.service';

@Component({
  selector: 'app-navig',
  templateUrl: './navig.component.html',
  styleUrls: ['./navig.component.scss']
})
export class NavigComponent implements OnInit {

  categHover = "";

  constructor(
    private router: Router,
    private navigServ: NavigService
  ) { }

  ngOnInit(): void {
    if (!!this.categHover) {
    const url = window.location.href.split('/').pop();
    this.categHover = url ?? "";
    }
  }

  changeCategHover(categ: string) {
    this.categHover = categ;
  }

  naviguer(url:string, fragment: string) {
    this.navigServ.naviguer(url, fragment);
  }
}
