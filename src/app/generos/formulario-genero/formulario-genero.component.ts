import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from 'src/app/utilidades/Validadores/primeraLetraMayuscula';
import { generoCreacionDTO } from '../Genero';

@Component({
  selector: 'app-formulario-genero',
  templateUrl: './formulario-genero.component.html',
  styleUrls: ['./formulario-genero.component.css']
})
export class FormularioGeneroComponent implements OnInit {

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        nombre: ['', { validators: [Validators.required, primeraLetraMayuscula()] }]
      }
    );

    //Le pasa valores al from si es edicion con el patch value
    if (this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  @Output()
  onSubmit: EventEmitter<generoCreacionDTO> = new EventEmitter<generoCreacionDTO>();

  form: FormGroup;
  
  @Input()
  modelo: generoCreacionDTO;
  
  @Input()
  errores: string[] = [];
  
  guardarCambios(){
    this.onSubmit.emit(this.form.value);
  }

  obtenerErrorCampoNombre(){
    var campo = this.form.get('nombre');

    if (campo.hasError('required')){
      return 'El campo nombre es requerido';
    }

    if(campo.hasError('primeraLetraMayuscula')){
      return campo.getError('primeraLetraMayuscula').mensaje;
    }

    return '';
  }
}

