import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingInComponent } from './pages/sing-in/sing-in.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SingUpComponent } from './pages/sing-up/sing-up.component';
import { AuthComponent } from './pages/auth/auth.component';
@NgModule({
  declarations: [
    SingInComponent,
    SingUpComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
