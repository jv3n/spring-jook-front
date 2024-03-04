import { headerRoutes } from '@views/header/header.routes';
import { ViewComponent } from '@shared/components/structural/view/view.component';
import { CountryTableViewComponent } from '@views/country-table/country-table-view.component';

export default [
  {
    path: '',
    component: ViewComponent,
    children: [
      {
        outlet: 'header',
        path: '',
        children: headerRoutes
      },
      {
        path: '',
        component: CountryTableViewComponent
      }
    ]
  }
];
