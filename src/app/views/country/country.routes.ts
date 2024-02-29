import { headerRoutes } from '@views/header/header.routes';
import { ViewComponent } from '@shared/components/structural/view/view.component';
import { AllCountriesComponent } from '@views/country/all-countries/all-countries.component';
import { CountryDetailComponent } from '@views/country/country-detail/country-detail.component';

export default [
  {
    path: '',
    component: ViewComponent,
    children: [
      {
        outlet: 'header',
        path: '',
        children: headerRoutes,
      },
      {
        path: '',
        component: AllCountriesComponent,
      },
      {
        path: ':iso',
        component: CountryDetailComponent,
      },
    ],
  },
];
