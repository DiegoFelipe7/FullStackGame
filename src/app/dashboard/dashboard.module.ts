import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardHerosComponent } from './pages/card-heros/card-heros.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';



@NgModule({
  declarations: [
    DashboardComponent,
    CardHerosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
