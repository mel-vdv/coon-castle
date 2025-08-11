import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigService {

  constructor(
    private router: Router
  ) { }

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
