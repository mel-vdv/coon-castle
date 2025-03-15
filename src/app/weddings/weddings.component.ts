import { Component, OnInit } from '@angular/core';
import { listeChats } from '../constantes/liste-chats';
import { Chat } from '../chat';

@Component({
  selector: 'app-weddings',
  templateUrl: './weddings.component.html',
  styleUrls: ['./weddings.component.scss']
})
export class WeddingsComponent implements OnInit {

  femelle!:Chat;
  male!:Chat;

  constructor() { 
  }

  ngOnInit(): void {
    this.femelle = listeChats.find( (c: Chat) => c.nom === "udaipur")!;
    this.male = listeChats.find( (c: Chat) => c.nom === "uragon")!;
  }


}
