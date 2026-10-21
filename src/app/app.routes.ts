import { Routes } from '@angular/router';
import { HomeComponent } from './stage6/pages/home/home.component';
import { AboutComponent } from './stage6/pages/about/about.component';
import { ContactComponent } from './stage6/pages/contact/contact.component';
import { NotForundComponent } from './stage6/pages/not-forund/not-forund.component';
import { ProfileComponent } from './stage6/pages/profile/profile.component';

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
    path: 'contact',
    component: ContactComponent,
  },

  {
    path: 'profile',
    component: ProfileComponent,
  },

  {
    path: '**',
    component: NotForundComponent,
  },
];
