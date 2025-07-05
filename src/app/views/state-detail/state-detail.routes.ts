import { headerRoutes } from '@views/header/header.routes';
import { HeaderComponent } from '@views/header/header.component';
import { StateDetailComponent } from '@views/state-detail/state-detail.component';

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
        component: StateDetailComponent,
      },
    ],
  },
];
