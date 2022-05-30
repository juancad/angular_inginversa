import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddjugadorComponent } from './components/addjugador/addjugador.component';
import { PlantillaComponent } from './components/plantilla/plantilla.component';
import { EditarComponent } from './components/editar/editar.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'plantilla', component: PlantillaComponent },
      { path: 'addjug', component: AddjugadorComponent },
      { path: 'editar', component: EditarComponent },
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
