import { headerRoutes } from '@views/header/header.routes';
import { CountryTableViewComponent } from '@views/country-table/country-table-view.component';
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
        component: CountryTableViewComponent,
      },
    ],
  },
];
