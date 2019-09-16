import { Component, OnInit } from '@angular/core';
import { VueloService } from '../../service/vuelo.service';
import { NgForm } from '@angular/forms';

import { trigger, state, style, transition, animate } from '@angular/animations';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Reserva } from '../../interfaces/reserva.interface';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css']
})
export class ReservarComponent implements OnInit {

  Nacimiento: Date = new Date();
  bsConfig: Partial<BsDatepickerConfig>; 
  show = false;

  vueloSeleccionado = [];

  solicitudUser: Reserva = {
      
      desde: '',
      hacia: '',
      fecha_vuelo: '',
      hora_vuelo: '',
      precio_manana: '',
      nombre: '',
      apellido: '',
      cedula: '',
      nacimiento: '',
      email: '',
  };

  constructor(
    private vueloService: VueloService
  ) { 
    this.bsConfig = Object.assign({},
      {
        containerClass: 'theme-default',
        dateInputFormat: 'MM/DD/YYYY',
        adaptivePosition: true,
        minDate: new Date(),
        showWeekNumbers: false,

      });
  }

  ngOnInit() {
    this.vueloSeleccionado.push(this.vueloService.vueloSeleccionado);
    this.show = this.vueloService.reserva;
    console.log(this.vueloSeleccionado);
  }

  async reservar( fsolicitud: NgForm ) {
    if ( fsolicitud.invalid ) { return; }
    console.log(fsolicitud.value);

    const valido =  await this.vueloService.crearReserva( fsolicitud.value );

    if ( valido ) {

      // this.show = true;
      // this.vueloTemporal = this.vueloService.vuelo;
      console.log('correcto');


    } else {
      console.log('error');
    }
  }

}
