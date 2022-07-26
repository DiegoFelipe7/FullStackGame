import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';
const routes: Routes = [

  {
    path: 'auth', loadChildren: () => import("../auth/auth.module").then(m => m.AuthModule)

  },
  {
    path: 'Dashboard', loadChildren: () => import("../dashboard/dashboard.module").then(m => m.DashboardModule),
    canLoad: [AuthGuard], // prevenir la carga si un usuario no inicia sesion
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
