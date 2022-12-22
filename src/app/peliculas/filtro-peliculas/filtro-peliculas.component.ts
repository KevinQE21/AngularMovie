import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private location: Location, private activatedRoute: ActivatedRoute){}
  
  peliculas = [
    { titulo: 'SpiderMan', enCines: false, proximosEstrenos: true, generos: [1, 2], poster: 'https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/b0OfuUs4lHGWG4VNlHcXwL5a.jpg' },
    { titulo: 'El viaje de chihiro', enCines: true, proximosEstrenos: false, generos: [1, 3], poster: 'https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg' },
    { titulo: 'Your Name', enCines: false, proximosEstrenos: false, generos: [1], poster: 'https://m.media-amazon.com/images/M/MV5BNGYyNmI3M2YtNzYzZS00OTViLTkxYjAtZDIyZmE1Y2U1ZmQ2XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg' }
  ]
  
  formOriginal = {
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false,
  }

  peliculasOriginal = this.peliculas;
  
  generos = [
    { id: 1, nombre: 'Drama' },
    { id: 2, nombre: 'Comedia' },
    { id: 3, nombre: 'Accion' },
  ];

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formOriginal);

    this.leerValoresUrl();
    this.buscarPeliculas(this.form.value);

    this.form.valueChanges
      .subscribe(valores => {
        this.peliculas = this.peliculasOriginal;
        this.buscarPeliculas(valores);
        this.escribirParametrosBusquedaEnUrl();
      })
  }

  private leerValoresUrl(){
    this.activatedRoute.queryParams.subscribe(params => {
      var objecto: any = {};

      if(params.titulo){
        objecto.titulo = params.titulo;
      }
  
      if(params.generoId){
        objecto.generoId = Number(params.generoId);
      }
  
      if(params.proximosEstrenos){
        objecto.proximosEstrenos = params.proximosEstrenos;
      }
  
      if(params.enCines){
        objecto.enCines = params.enCines;
      }

      this.form.patchValue(objecto);

    });
  }

  private escribirParametrosBusquedaEnUrl(){
    var queryStrings = [];

    var valoresFormulario = this.form.value;

    if(valoresFormulario.titulo){
      queryStrings.push(`titulo=${valoresFormulario.titulo}`);
    }

    if(valoresFormulario.generoId){
      queryStrings.push(`generoId=${valoresFormulario.generoId}`);
    }

    if(valoresFormulario.proximosEstrenos){
      queryStrings.push(`proximosEstrenos=${valoresFormulario.proximosEstrenos}`);
    }

    if(valoresFormulario.enCines){
      queryStrings.push(`enCines=${valoresFormulario.enCines}`);
    }

    this.location.replaceState('peliculas/buscar', queryStrings.join('&'));
  }

  limpiar() {
    this.form.patchValue(this.formOriginal);
  }

  buscarPeliculas(valores: any){
    if(valores.titulo){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo.indexOf(valores.titulo) !== -1);
    }

    if(valores.generoId){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(valores.generoId) !== -1);
    }

    if(valores.proximosEstrenos){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.proximosEstrenos);
    }

    if(valores.enCines){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.enCines);
    }
  }

}
