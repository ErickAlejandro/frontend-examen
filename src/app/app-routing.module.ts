import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component';
import { NuevoComponent } from './vistas/nuevo/nuevo.component';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { EditarComponent } from './vistas/editar/editar.component';
import { InformacionComponent } from './informacion/informacion.component';
import { ProgramadorComponent } from './programador/programador.component';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path:'login', component:LoginComponent },
  {path:'nuevo', component:NuevoComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'editar/:id', component:EditarComponent},
  {path:'informacion', component: InformacionComponent},
  {path:'programador', component: ProgramadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, DashboardComponent, NuevoComponent, EditarComponent]
