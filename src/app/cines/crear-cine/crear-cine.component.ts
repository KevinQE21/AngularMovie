import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { cineCreacionDTO } from '../cines';
import { CinesService } from '../cines.service';

@Component({
  selector: 'app-crear-cine',
  templateUrl: './crear-cine.component.html',
  styleUrls: ['./crear-cine.component.css']
})
export class CrearCineComponent {
  errores: string[] = [];

  //Inyectar servicios, eso se hace mediante el constructor de la clase
  constructor(private router: Router, private cinesService: CinesService) { }  
  
  guardarCambios(cine: cineCreacionDTO){
    this.cinesService.crear(cine).subscribe(() => {
      this.router.navigate(['/cines']);
    }, (error) => this.errores = parsearErroresAPI(error))
  }
}
