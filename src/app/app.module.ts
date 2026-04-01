import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
//COMPONENTS : 
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';
import { SloganComponent } from './slogan/slogan.component';
import { ActualitiesComponent } from './actualities/actualities.component';
import { CitationComponent } from './citation/citation.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CatteryComponent } from './cattery/cattery.component';
import { MaineComponent } from './maine/maine.component';
import { ContactComponent } from './contact/contact.component';
import { GeneralitiesComponent } from './generalities/generalities.component';
import { UziComponent } from './uzi/uzi.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { SellingComponent } from './selling/selling.component';
import { HistoryComponent } from './history/history.component';
import { AlimentationComponent } from './alimentation/alimentation.component';
import { HealthComponent } from './health/health.component';
import { ReproductionComponent } from './reproduction/reproduction.component';
import { PlaceComponent } from './place/place.component';
import { NavigComponent } from './navig/navig.component';
import { PubComponent } from './pub/pub.component';
import { ZoomComponent } from './zoom/zoom.component';
import { PhiloComponent } from './philo/philo.component';
import { ChronologieComponent } from './chronologie/chronologie.component';
import { AdoptantComponent } from './adoptant/adoptant.component';
import { ChatonsDispoComponent } from './chatons-dispo/chatons-dispo.component';
import { FichePersoComponent } from './fiche-perso/fiche-perso.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// Fonction pour charger les fichiers de traduction
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/trad/', '.json');
}

//firebase
import { AngularFireStorageModule} from '@angular/fire/compat/storage';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//PIPES
import { TitlecasePipe } from './pipes/titlecase.pipe';
import { PoidsPipe } from './pipes/poids.pipe';
import { ScullyLibModule } from '@scullyio/ng-lib';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleComponent,
    SloganComponent,
    ActualitiesComponent,
    CitationComponent,
    FooterComponent,
    HomeComponent,
    CatteryComponent,
    MaineComponent,
    ContactComponent,
    GeneralitiesComponent,
    UziComponent,
    WeddingsComponent,
    SellingComponent,
    HistoryComponent,
    AlimentationComponent,
    HealthComponent,
    ReproductionComponent,
    PlaceComponent,
    NavigComponent,
    PubComponent,
    ChatonsDispoComponent,
    FichePersoComponent,
    TitlecasePipe,
    PoidsPipe,
    ZoomComponent,
    PhiloComponent,
    ChronologieComponent,
    AdoptantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
         
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    AngularFireStorageModule,
    ReactiveFormsModule,
    FormsModule,
    ScullyLibModule
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase }////////////////////////on ajoute pour éviter une error
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }