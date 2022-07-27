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
import { BoardComponent } from './pages/mainGame/board/board.component';
import { PlayersComponent } from './pages/mainGame/players/players.component';
import { CardsInGameComponent } from './pages/mainGame/cards-in-game/cards-in-game.component';
import { MarvelGameComponent } from './pages/mainGame/marvel-game/marvel-game.component';



@NgModule({
  declarations: [
    DashboardComponent,
    CardsHerosComponent,
    CardsComponent,
    GameComponent,
    GameBoardComponent,
    CreateGameComponent,
    SidebarComponent,
    BoardComponent,
    PlayersComponent,
    CardsInGameComponent,
    MarvelGameComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class DashboardModule { }