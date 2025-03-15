import { listeChats } from './../constantes/liste-chats';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chat } from '../chat';

@Component({
  selector: 'app-fiche-perso',
  templateUrl: './fiche-perso.component.html',
  styleUrls: ['./fiche-perso.component.scss']
})
export class FichePersoComponent implements OnInit {

  nom?: string | null; 
  chat?: Chat | null;
  positionDefile: number = 0;
  indexAgrandi?: number;
  chevronVisible: boolean = true;
  barreWidth: any;
  zoomVis: boolean = false;
  @ViewChild('barre') barre?: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.nom = params.get('nom');
      this.chat = listeChats.find((c: Chat) => c.nom === this.nom);
    });
     this.barreWidth = this.getBarreWidth();
     this.getVisible();
  }

  getBarreWidth() {
    const largeur =  this.barre.nativeElement.offsetWidth;
    console.log('width', largeur);
    return largeur;
  }

  getVisible() {
    this.chevronVisible = this.barreWidth > (450 - this.positionDefile );
  }

  navigate(chat: string): void {
    this.router.navigate([`/chat/${chat}`]);
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
