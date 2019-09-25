import {Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {UserCartComponent} from './user-cart/user-cart.component';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';

export const MAIN_ROUTES: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
  path: 'home',
  component: HomePageComponent,
  },
  {
    path: 'cart',
    component: UserCartComponent,
  },
  {
    path: 'sign_in',
    component: LoginComponent
  },
  {
    path: 'sign_up',
    component: SignUpComponent
  }
  ];
