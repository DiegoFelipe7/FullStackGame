import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AuthComponent } from './pages/auth/auth.component';
import { SingInComponent } from './pages/sing-in/sing-in.component';
import { SingUpComponent } from './pages/sing-up/sing-up.component';

const routes: Routes = [
  {
    path: '', component: AuthComponent, children:
      [

        { path: 'SignIn', component: SingInComponent },
        { path: 'SingUp', component: SingUpComponent },
        { path: '**', redirectTo: 'SignIn' }
      ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
