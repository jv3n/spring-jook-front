import { HomeComponent } from '@views/home/home.component';
import { headerRoutes } from '@views/header/header.routes';
import { HeaderComponent } from '@views/header/header.component';

export default [
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        outlet: 'header',
        path: '',
        children: headerRoutes,
      },
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
];
