import { Component, OnInit } from '@angular/core';
import { VARIABLES } from '../constantes/variables';

@Component({
  selector: 'app-chronologie',
  templateUrl: './chronologie.component.html',
  styleUrls: ['./chronologie.component.scss']
})
export class ChronologieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  n = VARIABLES.nombreChatons;
  chatterie = VARIABLES.chatterieMariage;
  timing = VARIABLES.timing;


}
