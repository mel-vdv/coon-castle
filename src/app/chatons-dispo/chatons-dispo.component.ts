import { Chat } from './../chat';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { listeChats } from '../constantes/liste-chats';

@Component({
  selector: 'app-chatons-dispo',
  templateUrl: './chatons-dispo.component.html',
  styleUrls: ['./chatons-dispo.component.scss']
})
export class ChatonsDispoComponent implements OnInit {

  sexe: string = "m,f";
  etat: string = 'dispo,option,reserve,eval';
  chatons?: Chat[];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.chatons = listeChats.filter((c:Chat)=> c.statut !== 'adulte');
  }
 
  filtrerSexe(sexeArr: string) {
    this.sexe = sexeArr;
    this.trier();
  }

  filtrerEtat(etatArr: string) {
    this.etat = etatArr;
    this.trier();
  }

  trier() {
    this.chatons = listeChats.filter((c:Chat) => this.sexe.includes(c.sexe) && this.etat.includes(c.statut) && c.statut !== 'adulte');
  }

  navigate(nom: string) {
    this.router.navigate([`/chat/${nom}`]);
  }

}
