//angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//componentes
import { CardsHerosComponent } from './pages/ListCards/cards-heros/cards-heros.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CardsComponent } from './pages/ListCards/cards/cards.component';
//modulos 
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    DashboardComponent,
    CardsHerosComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class DashboardModule { }
