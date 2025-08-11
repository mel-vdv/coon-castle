import { Component, OnInit } from '@angular/core';
import { listeChats } from '../constantes/liste-chats';
import { Chat } from '../chat';
import { Router } from '@angular/router';
import { GetChatService } from '../services/get-chat.service';

@Component({
  selector: 'app-weddings',
  templateUrl: './weddings.component.html',
  styleUrls: ['./weddings.component.scss']
})
export class WeddingsComponent implements OnInit {

  femelle!:Chat;
  male!:Chat;

  constructor(
    private router: Router,
    private getChatServ: GetChatService
  ) { 
  }

  ngOnInit(): void {
    this.femelle = listeChats.find( (c: Chat) => c.nom === "udaipur")!;
    this.male = listeChats.find( (c: Chat) => c.nom === "uragon")!;
  }

  navigate(nom: string) {
    const chat:Chat = listeChats.find((c: Chat) => c.nom === nom)!;
    this.getChatServ.setChat(chat);
    this.router.navigate([`/chat/${nom}`]);
  }
}
