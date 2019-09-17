import { Component, OnInit } from '@angular/core';
import { VueloService } from '../../service/vuelo.service';
import { Reserva } from '../../interfaces/reserva.interface';

@Component({
  selector: 'app-consulta-reserva',
  templateUrl: './consulta-reserva.component.html',
  styleUrls: ['./consulta-reserva.component.css']
})
export class ConsultaReservaComponent implements OnInit {

  cedula = '';
  reservas = {};
  show = false;

  constructor(
    private vueloService: VueloService
  ) { }

  ngOnInit() {
    this.show = this.vueloService.tablaReserva;
  }

  consultar( cedula ) {
    this.vueloService.getCedula(cedula);
    setTimeout(() => {
      this.llenarTabla();
    }, 1500 );
  }

  llenarTabla() {
    this.show = this.vueloService.tablaReserva;
    this.reservas = this.vueloService.reservas;
    console.log(this.reservas);
  }

}
