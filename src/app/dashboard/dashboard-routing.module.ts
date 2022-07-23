import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CardsHerosComponent } from './pages/ListCards/cards-heros/cards-heros.component';
const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children:
      [
        { path: 'Cards', component: CardsHerosComponent },
        { path: '**', redirectTo: 'Cards' }
      ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
