import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {
  ngOnInit(): void {
    
  }

  constructor() {}

  @Input()
  peliculas;

  remover(indicePelicula: number): void {
    this.peliculas.splice(indicePelicula, 1);
  }

}
