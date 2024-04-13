import { headerRoutes } from '@views/header/header.routes';
import { CountryDetailComponent } from '@views/country-detail/country-detail.component';
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
        component: CountryDetailComponent,
      },
    ],
  },
];
