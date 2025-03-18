import { Component, OnInit } from '@angular/core';
import { VARIABLES } from '../constantes/variables';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {

  indices:number[] = VARIABLES.indexPhotosJardin;
  maps: string = VARIABLES.maps;

  constructor() { }

  ngOnInit(): void {
  }

}
