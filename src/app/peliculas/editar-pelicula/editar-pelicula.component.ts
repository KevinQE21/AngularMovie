import { Component, OnInit } from '@angular/core';
import { PeliculaDTO } from '../peliculaDTO';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {
  
  constructor() {}
  
  modelo: PeliculaDTO = {titulo: 'abc', trailer: 'abc', enCines: true, resumen: 'abc', fechaLanzamiento: new Date(), poster: ''};

  ngOnInit(): void {
  }

  guardarCambios(pelicula: PeliculaDTO){
    console.log(pelicula);
  }  
}
