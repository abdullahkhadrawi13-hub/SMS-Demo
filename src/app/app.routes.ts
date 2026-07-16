import { Routes } from '@angular/router';
import { Login } from './login/login';
import { ChangePassword } from './change-password/change-password';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
     {
    path: '',
    component: Login
  },
  {
    path: 'change-password',
    component: ChangePassword
  },
   {
    path: 'dashboard',
    component: Dashboard
  }
];
