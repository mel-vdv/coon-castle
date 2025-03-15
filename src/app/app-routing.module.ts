import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatteryComponent } from './cattery/cattery.component';
import { MaineComponent } from './maine/maine.component';
import { ContactComponent } from './contact/contact.component';
import { FichePersoComponent } from './fiche-perso/fiche-perso.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent},
  { path: "cattery", component: CatteryComponent},
  { path: "maine", component: MaineComponent},
  { path: "contact", component: ContactComponent},
  { path: "chat/:nom", component: FichePersoComponent}
];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled', // Active le scroll vers le fragment
  scrollPositionRestoration: 'enabled' // Restaure la position au chargement
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
