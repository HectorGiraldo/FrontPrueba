import { Component, OnInit } from '@angular/core';
import { VueloService } from '../../service/vuelo.service';

@Component({
  selector: 'app-consulta-reserva',
  templateUrl: './consulta-reserva.component.html',
  styleUrls: ['./consulta-reserva.component.css']
})
export class ConsultaReservaComponent implements OnInit {

  cedula = '';
  reservas = {};
  show= false

  constructor(
    private vueloService: VueloService
  ) { }

  ngOnInit() {
    this.show = this.vueloService.tablaReservas;
  }

  consultar( cedula ) {
    this.vueloService.getCedula(cedula);
    this.reservas= this.vueloService.reservas;
    this.show = this.vueloService.tablaReservas;
  }

}
