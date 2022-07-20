//angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//module
import { AppRoutingModule } from './app-routing.module';
//Components
import { AppComponent } from './app.component';
import { SingInComponent } from './auth/sing-in/sing-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    SingInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
