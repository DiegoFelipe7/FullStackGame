import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GameBoardComponent } from './pages/game/game-board/game-board.component';
import { GameComponent } from './pages/game/game/game.component';
import { CardsHerosComponent } from './pages/ListCards/cards-heros/cards-heros.component';
const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children:
      [{ path: 'Game', component: GameBoardComponent },
      { path: 'Cards', component: CardsHerosComponent },
      { path: '**', redirectTo: 'Game' }
      ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
