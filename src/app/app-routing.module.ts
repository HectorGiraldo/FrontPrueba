import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ReservarComponent } from './page/reservar/reservar.component';
import { ConsultaReservaComponent } from './page/consulta-reserva/consulta-reserva.component';
import { ConsultaVuelosComponent } from './page/consulta-vuelos/consulta-vuelos.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'reservar', component: ReservarComponent
  },
  {
    path: 'consulta-reserva', component: ConsultaReservaComponent
  },
  {
    path: 'consulta-vuelos', component: ConsultaVuelosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
