import { HomeComponent } from '@views/home/home.component';
import { headerRoutes } from '@views/header/header.routes';
import { ViewComponent } from '@shared/components/structural/view/view.component';

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
        component: HomeComponent,
      },
    ],
  },
];
