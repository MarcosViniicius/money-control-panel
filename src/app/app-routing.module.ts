import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_components/pages/home/home.component';
import { DashboardComponent } from './_components/pages/dashboard/dashboard.component';
import { ControleEntregasComponent } from './_components/pages/controle-entregas/controle-entregas.component';
import { DownEntregaComponent } from './_components/pages/controle-entregas/down-entrega/down-entrega.component';
import { NewEntregaComponent } from './_components/pages/controle-entregas/new-entrega/new-entrega.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'entregas_control', component: ControleEntregasComponent },
  { path: 'new_entrega', component: NewEntregaComponent },
  { path: 'down_entrega', component: DownEntregaComponent },
];
export const routing: ModuleWithProviders<AppRoutingModule> =
  RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
