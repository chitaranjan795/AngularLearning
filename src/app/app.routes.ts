import { Routes } from '@angular/router';
import { HomeComponent } from './Routing/pages/home/home.component';
import { ServicesComponent } from './Routing/pages/services/services.component';
import { AboutComponent } from './Routing/pages/about/about.component';
import { PageNotFoundComponent } from './Routing/pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'about',
    component: AboutComponent,
  },

  {
    path: 'services',
    component: ServicesComponent,
  },

  // {
  //   path: '**',
  //   component: PageNotFoundComponent,
  // },
  { path: '**', redirectTo: '' }, // It will redirect to the home component page
];
