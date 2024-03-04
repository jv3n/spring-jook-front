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
    loadChildren: () => import('@views/country-table/country-table.routes'),
  },
  {
    path: 'country-detail/:iso3',
    title: 'Detail Country',
    loadChildren: () => import('@views/country-detail/country-detail.routes'),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
