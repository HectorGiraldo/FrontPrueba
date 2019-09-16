import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { trigger, state, style, transition, animate } from '@angular/animations';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
// import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Vuelo } from '../../interfaces/vuelo.interface';
import { VueloService } from '../../service/vuelo.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // modalRef: BsModalRef;
  vueloTemporal = {};
  vuelo = {};

  solicitudUser: Vuelo = {
    desde: '',
    hacia: '',
    fecha_vuelo: '',
  };


  paises  = [{
    codigo: 'bogota',
    nombre: 'Bogotá'
  },
  {
    codigo: 'cali',
    nombre: 'Cali'
  }];


  dateVuelo: Date  = new Date();
  // Nacimiento: Date = new Date();

  show = false;


  bsConfig: Partial<BsDatepickerConfig>; 

  constructor(
    private vueloService: VueloService
    // private modalService: BsModalService
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

  }

  async solicitud( fsolicitud: NgForm ) {
    if ( fsolicitud.invalid ) { return; }
    const valido =  await this.vueloService.getVuelos( fsolicitud.value );

    if ( valido ) {

      this.show = true;
      this.vueloTemporal = this.vueloService.vuelo;
      console.log('correcto');


    } else {
      console.log('error');
    }
  }

  reservar(item) {
    this.vueloService.guardarVueloSelecciona(item);

  }

  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template);
  // }


}
