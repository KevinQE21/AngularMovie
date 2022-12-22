import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MultipleSelectorModel } from 'src/app/utilidades/selector-multiple/multipleSelectorModel';
import { PeliculaCreacionDTO, PeliculaDTO } from '../peliculaDTO';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {}

  form: FormGroup;

  @Input()
  modelo: PeliculaDTO;

  @Output()
  OnSubmit: EventEmitter<PeliculaCreacionDTO> = new EventEmitter<PeliculaCreacionDTO>();

  generosNoSeleccionados: MultipleSelectorModel[] = [
    {llave: 1, valor: 'Terror'}, 
    {llave: 2, valor: 'Comedio'}, 
    {llave: 3, valor: 'Drama'}
  ];

  generosSeleccionados: MultipleSelectorModel[] = [];

  cinesNoSeleccionados: MultipleSelectorModel[] = [
    {llave: 1, valor: 'Nova'},
    {llave: 2, valor: 'Cinemark'},
    {llave: 3, valor: 'Cinepolis'},
  ];

  cinesSeleccionados: MultipleSelectorModel[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: ['', {validators: [Validators.required]}],
      resumen: '',
      enCines: false,
      trailer: '',
      fechaLanzamiento: '',
      poster: '',
      generosId: '',
      cinesId: ''
    });

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  guardarCambios(){
    const generosIds = this.generosSeleccionados.map(val => val.llave);
    this.form.get('generosId').setValue(generosIds);

    const cinesIds = this.cinesSeleccionados.map(val => val.llave);
    this.form.get('cinesId').setValue(cinesIds);

    this.OnSubmit.emit(this.form.value);
  }

  archivoSeleccionado(archivo: File){
    this.form.get('poster').setValue(archivo);
  }

  changeMarkdown(texto: string){ 
    this.form.get('resumen').setValue(texto);
  }
}
