import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeroesComponent} from './heroes/heroes.component';
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {MessagesComponent} from './messages/messages.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailRouterLinkComponent} from './hero-detail-router-link/hero-detail-router-link.component';
import {HeroesRouterLinkComponent} from './heroes-router-link/heroes-router-link.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroesRouterLinkComponent,
    HeroDetailComponent,
    HeroDetailRouterLinkComponent,
    MessagesComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule//雙向綁定 雙向繫結
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule_ {
}
