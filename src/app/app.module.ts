import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
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
import { PhilosophyComponent } from './philosophy/philosophy.component';
import { AlimentationComponent } from './alimentation/alimentation.component';
import { HealthComponent } from './health/health.component';
import { ReproductionComponent } from './reproduction/reproduction.component';
import { PlaceComponent } from './place/place.component';
import { NavigComponent } from './navig/navig.component';
import { PubComponent } from './pub/pub.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// Fonction pour charger les fichiers de traduction
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/trad/', '.json');
}

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
    PhilosophyComponent,
    AlimentationComponent,
    HealthComponent,
    ReproductionComponent,
    PlaceComponent,
    NavigComponent,
    PubComponent
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
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
