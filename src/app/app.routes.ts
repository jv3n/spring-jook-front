import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'home',
    title: 'Hearth',
    loadChildren: () => import('@views/home/home.routes'),
  },
  {
    path: 'countries',
    title: 'Countries',
    loadChildren: () => import('@views/country/country.routes'),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
