import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';
const routes: Routes = [

  {
    path: 'auth', loadChildren: () => import("../auth/auth.module").then(m => m.AuthModule)

  },
  {
    path: 'Dashboard', loadChildren: () => import("../dashboard/dashboard.module").then(m => m.DashboardModule),
    canLoad: [AuthGuard], // prevenir la carga de un componente
    canActivate: [AuthGuard] //previene que el usuario ingrese a una ruta en especifico
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
