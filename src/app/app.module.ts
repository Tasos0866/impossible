import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LightboxModule } from 'ngx-lightbox';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { routeConfig } from './routeConfig';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    GameComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    LightboxModule,
    RouterModule.forRoot(routeConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
