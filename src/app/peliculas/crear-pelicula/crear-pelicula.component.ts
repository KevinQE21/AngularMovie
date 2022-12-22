import { Component } from '@angular/core';
import { PeliculaCreacionDTO } from '../peliculaDTO';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent {


  guardarCambios(pelicula: PeliculaCreacionDTO){
    console.log(pelicula);
  }
}
