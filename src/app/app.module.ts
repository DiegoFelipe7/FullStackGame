//angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
//
import { AngularFireModule } from '@angular/fire/compat';
//module
import { AppRoutingModule } from './routes/app-routing.module';
//Components
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    DashboardModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
