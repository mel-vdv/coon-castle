import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navig',
  templateUrl: './navig.component.html',
  styleUrls: ['./navig.component.scss']
})
export class NavigComponent implements OnInit {

  categHover = "";

  constructor(
    private router: Router
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
    this.router.navigate([`${url}`], { fragment: `${fragment}` }).then(() => {
      setTimeout(() => {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    });
  }
}
