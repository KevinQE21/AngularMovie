import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { generoCreacionDTO } from '../Genero';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent {
  //Inyectar servicios, eso se hace mediante el constructor de la clase
  constructor(private router: Router) { }  

  modelo : generoCreacionDTO = { nombre: 'Drama' };


  guardarCambios(genero: generoCreacionDTO){
    // .... guardar los cambios -> webApi futuro
    console.log(genero);
    this.router.navigate(['/generos']);
  }


}