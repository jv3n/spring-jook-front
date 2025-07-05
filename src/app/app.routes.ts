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
    loadChildren: () => import('@views/country-table/country-table-view.routes'),
  },
  {
    path: 'country-detail/:iso3',
    title: 'Country Detail',
    loadChildren: () => import('@views/country-detail/country-detail.routes'),
  },
  {
    path: 'state-detail/:stateId',
    title: 'State Detail',
    loadChildren: () => import('@views/state-detail/state-detail.routes'),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
