import { listeChats } from './../constantes/liste-chats';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chat } from '../chat';
import { GetChatService } from '../services/get-chat.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-fiche-perso',
  templateUrl: './fiche-perso.component.html',
  styleUrls: ['./fiche-perso.component.scss']
})
export class FichePersoComponent implements OnInit {

  nom?: string | null; 
  chat: Chat | null = null;
  positionDefile: number = 0;
  indexAgrandi?: number;
  chevronVisible: boolean = true;
  barreWidth: any;
  zoomVis: boolean = false;
  @ViewChild('barre') barre?: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private getChatServ: GetChatService
  ) { }

  ngOnInit(): void {
    console.log('on init');
    this.getChat().then((data: Chat | null) => {this.chat = data});
    this.barreWidth = this.getBarreWidth();
    this.getVisible();
  }

  async getChat(): Promise<Chat | null> {
    console.log('get chat');
    return this.getChatServ.getChat() ?? this.getXXX() ?? null;
  }

  getXXX() { console.log('get xxx)');
    this.route.paramMap.subscribe(params => {
    const nom = params.get('nom');
    console.log('nom', nom);
    const chat = listeChats.find((c: Chat) => c.nom === nom)!;
    console.log('chat===', chat);
    return chat ?? null;
    })
  }

  getBarreWidth() {
    const largeur =  this.barre.nativeElement.offsetWidth;
    console.log('width', largeur);
    return largeur;
  }

  getVisible() {
    this.chevronVisible = this.barreWidth > (450 - this.positionDefile );
  }

  navigate(nom: string): void {
    const chat: Chat = listeChats.find((c: Chat) => c.nom === nom)!;
    this.getChatServ.setChat(chat);
    this.chat = chat;
    this.router.navigate([`/chat/${nom}`]);
  }

  defiler(direction: string) {
    this.barre = document.getElementById('barre') as HTMLElement;
    if (direction === "g") {
      this.positionDefile += 150;
      this.barre.style.left = this.positionDefile + "px";
    }
    else {
      this.positionDefile -= 150;
      this.barre.style.left = this.positionDefile + "px";
    }
    this.getVisible();
  }

  agrandit(index: number) {
    this.indexAgrandi = index;
  }

  closeZoomVis() :void{
    this.zoomVis = false;
  }
}
