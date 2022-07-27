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
import { GameComponent } from './pages/game/game/game.component';
import { GameBoardComponent } from './pages/game/game-board/game-board.component';
import { CreateGameComponent } from './pages/game/create-game/create-game.component';
import { SidebarComponent } from './pages/shared/sidebar/sidebar.component';



@NgModule({
  declarations: [
    DashboardComponent,
    CardsHerosComponent,
    CardsComponent,
    GameComponent,
    GameBoardComponent,
    CreateGameComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class DashboardModule { }