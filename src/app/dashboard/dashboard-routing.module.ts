import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardHerosComponent } from './pages/card-heros/card-heros.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
const routes: Routes = [
  {
    path: "Menu", component: DashboardComponent,
    children:
      [

        { path: "Cards", component: CardHerosComponent },
        { path: "**", redirectTo: "Cards" }
      ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
