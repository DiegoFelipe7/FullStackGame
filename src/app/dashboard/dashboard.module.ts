import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardHerosComponent } from './pages/card-heros/card-heros.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [
    CardHerosComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
