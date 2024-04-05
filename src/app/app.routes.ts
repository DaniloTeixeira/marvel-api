import { Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];
