import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { cineDTO } from '../cines';
import { CinesService } from '../cines.service';

@Component({
  selector: 'app-indice-cine',
  templateUrl: './indice-cine.component.html',
  styleUrls: ['./indice-cine.component.css']
})
export class IndiceCineComponent {
  constructor(private cinesService: CinesService) {}

  cines: cineDTO[];
  columnasAMostrar = ['id', 'nombre', 'acciones'];
  cantidadTotalRegistros;
  paginaActual = 1;
  cantidadRegistrosAMostrar = 10;

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);  
  }
  
  cargarRegistros(pagina: number, cantidadElementosAMostrar){
    this.cinesService.obtenerTodos(pagina, cantidadElementosAMostrar)
    .subscribe((response: HttpResponse<cineDTO[]>) => {
      this.cines = response.body;
      this.cantidadTotalRegistros = response.headers.get("cantidadTotalRegistros");
    }, error => console.error(error));    
  }

  actualizarPaginacion(datos: PageEvent){
    this.paginaActual = datos.pageIndex + 1;
    this.cantidadRegistrosAMostrar = datos.pageSize;
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  borrar(id: number){
    this.cinesService.borrar(id)
      .subscribe(() => {
        this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
      }, error => console.error(error));
  }
}
