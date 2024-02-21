import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'home',
    title: 'Demo Spring jOOK | Home',
    loadChildren: () => import('@views/home/home.routes'),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
