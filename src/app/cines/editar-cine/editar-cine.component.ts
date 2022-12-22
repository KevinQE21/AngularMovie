import { Component } from '@angular/core';
import { cineCreacionDTO, cineDTO } from '../cines';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent {

  modelo: cineDTO = {nombre: 'Haku', latitud: 9.980957024371198, longitud: -444.1637492179871};

  guardarCambios(cine: cineCreacionDTO){
    console.log(cine);
  }
}
