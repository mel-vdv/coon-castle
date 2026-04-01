import { Component, OnInit } from '@angular/core';
import { CrudsService } from '../cruds.service';

@Component({
  selector: 'app-actualities',
  templateUrl: './actualities.component.html',
  styleUrls: ['./actualities.component.scss']
})
export class ActualitiesComponent implements OnInit {

  constructor(
    private crud: CrudsService
  ) { }

  inscr = false;
  message = "";
  email = "";

  listeattente() {
     this.crud.addMessage(
      { to: ["thecooncastle@gmail.com",],
      message: {
        subject: `COON CASTLE : liste d'attente`,
        text:`Nouvel inscrit sur  la liste d'attente COON CASTLE : ${this.email} `,
        html: `<h3> Nouvel inscrit sur  la liste d'attente COON CASTLE </h3> 
        <p>${this.email} </p>`
      }}
    ).then(()=> {
      this.message = "Vous serez avertis de la prochaine portée. Merci."
      this.inscr = false;
    })

  }

  ngOnInit(): void {
  }

}
