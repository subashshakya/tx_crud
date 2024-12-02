import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RouteNotFoundComponent } from '../shared/components/route-not-found/route-not-found.component';
import { UserSigningMode } from '../shared/enums/user-common.enum';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { userMode: UserSigningMode.Login },
  },
  {
    path: 'sign-up',
    component: LoginComponent,
    data: { userMode: UserSigningMode.Signup },
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: RouteNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
