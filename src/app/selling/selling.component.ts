import { Component, OnInit } from '@angular/core';
import { NavigService } from '../navig.service';
import { VARIABLES } from '../constantes/variables';


@Component({
  selector: 'app-selling',
  templateUrl: './selling.component.html',
  styleUrls: ['./selling.component.scss']
})
export class SellingComponent implements OnInit {

  constructor(
    private navigServ: NavigService
  ) { }

  ngOnInit(): void {
  }

  tarifM = VARIABLES.tarifM;
  tarifF = VARIABLES.tarifF;

  naviguer(url:string, fragment: string) {
    this.navigServ.naviguer(url, fragment);
  }

}
