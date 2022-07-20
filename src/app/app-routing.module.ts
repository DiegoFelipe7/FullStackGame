import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SingInComponent } from './auth/sing-in/sing-in.component';

const routes: Routes = [
  { path: '', redirectTo: '/singIn', pathMatch: 'full' },
  { path: "singIn", component: SingInComponent },
  { path: "singUp", component: SignUpComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
