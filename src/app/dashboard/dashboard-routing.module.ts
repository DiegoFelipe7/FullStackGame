import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateGameComponent } from './pages/game/create-game/create-game.component';
import { GameBoardComponent } from './pages/game/game-board/game-board.component';
import { GameComponent } from './pages/game/game/game.component';
import { CardsHerosComponent } from './pages/ListCards/cards-heros/cards-heros.component';
const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children:
      [
        { path: 'CreateGame', component: CreateGameComponent },
        { path: 'Game', component: GameComponent },
        { path: "GameBoard/:id", component: GameBoardComponent },
        { path: 'Cards', component: CardsHerosComponent },
        { path: '**', redirectTo: 'CreateGame' }
      ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
