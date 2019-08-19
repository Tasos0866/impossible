import { Routes } from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';

export const routeConfig: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'game',
    component: GameComponent
  },
  { path: '**', component: PageNotFoundComponent }
];
