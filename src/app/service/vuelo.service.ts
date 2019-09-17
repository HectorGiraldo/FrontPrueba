import { Injectable } from '@angular/core';
import { Vuelo } from '../interfaces/vuelo.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Reserva } from '../interfaces/reserva.interface';


const apiUrl = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})
export class VueloService {

  vuelo = {} ;
  vueloSeleccionado: [];
  reserva = false;
  reservas = {};
  tablaReserva = false;

  constructor(
    private http: HttpClient
  ) { }

  getVuelos( solicitudUser: Vuelo ) {
    this.vuelo = [];
    const url = apiUrl  + '/consulta';
    const data = solicitudUser;
    return new Promise( resolve => {
      this.http.post<Vuelo>( url, data, ).subscribe( (resp) => {

        if ( resp ) {
          this.vuelo = resp ;
          resolve(true);
        } else {
          resolve(false);
        }
      },
      (error) => {
        console.log( error, 'error servicio' );
        resolve(false);
      }
      );
    });
  }

    guardarVueloSelecciona(item) {

        this.vueloSeleccionado = item;
        this.reserva = true;
        console.log(item);

    }

    crearReserva( solicitudUser: Vuelo ) {
      // this.vuelo = [];
      const url = apiUrl  + '/reservas';
      const data = solicitudUser;
      return new Promise( resolve => {
        this.http.post<Vuelo>( url, data, ).subscribe( (resp) => {

          if ( resp ) {
            // this.vuelo = resp ;
            resolve(true);
          } else {
            resolve(false);
          }
        },
        (error) => {
          console.log( error, 'error servicio' );
          resolve(false);
        }
        );
      });
    }

    getCedula(cedula) {
      const url = apiUrl  + '/reservas';
      const data = cedula;

      return this.http.get( `${url}/${data}` ).subscribe(resp => {
        this.reservas = resp;
        this.tablaReserva = true;
        console.log(this.reservas);
      });
    }


    

}
