import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { generoCreacionDTO } from '../Genero';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent {

  //Inyectar servicios, eso se hace mediante el constructor de la clase
  constructor(private router: Router) { }  

  guardarCambios(genero: generoCreacionDTO){
    // .... guardar los cambios -> webApi futuro
    console.log(genero);
    this.router.navigate(['/generos']);
  }
  
}
