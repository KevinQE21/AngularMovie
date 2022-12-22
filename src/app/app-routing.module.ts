import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router'
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { CrearGeneroComponent } from './generos/crear-genero/crear-genero.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearActorComponent } from './actores/crear-actor/crear-actor.component';
import { IndiceCineComponent } from './cines/indice-cine/indice-cine.component';
import { CrearCineComponent } from './cines/crear-cine/crear-cine.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { EditarActorComponent } from './actores/editar-actor/editar-actor.component';
import { EditarCineComponent } from './cines/editar-cine/editar-cine.component';
import { EditarPeliculaComponent } from './peliculas/editar-pelicula/editar-pelicula.component';
import { EditarGeneroComponent } from './generos/editar-genero/editar-genero.component';
import { FiltroPeliculasComponent } from './peliculas/filtro-peliculas/filtro-peliculas.component';

//Se configuran las reglas de ruteo aqui, ahorita esta vacio
const routes: Routes = [
  {
    //Lo que va a ver en la URL El componente que saldra
    path: '', component: LandingPageComponent
  },
  //Generos
  { path: 'generos', component: IndiceGenerosComponent },
  { path: 'generos/crear', component: CrearGeneroComponent},
  { path: 'generos/editar/:id', component: EditarGeneroComponent},
  //Actores
  { path: 'actores', component: IndiceActoresComponent },
  { path: 'actores/crear', component: CrearActorComponent},
  { path: 'actores/editar/:id', component: EditarActorComponent},
  //Cines
  { path: 'cines', component: IndiceCineComponent },
  { path: 'cines/crear', component: CrearCineComponent},
  { path: 'cines/editar/:id', component: EditarCineComponent},
  //Peliculas
  { path: 'peliculas/crear', component: CrearPeliculaComponent},
  { path: 'peliculas/editar/:id', component: EditarPeliculaComponent},
  { path: 'peliculas/buscar', component: FiltroPeliculasComponent},
  //Wildcard
  { path: '**', redirectTo:  '' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
