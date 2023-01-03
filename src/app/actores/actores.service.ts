import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroments';
import { formatearFecha } from '../utilidades/utilidades';
import { actorCreacionDTO, actorDTO } from './Actor';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  constructor(private http: HttpClient) { }

  private apiURL = enviroment.apiURL + 'actores';

  public crear(actor: actorCreacionDTO){
    const formData = this.construirFormData(actor);
    return this.http.post(this.apiURL, formData);
  }

  public obtenerTodos(pagina: number, cantidadRegistrosAMostrar: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('pagina', pagina);
    params = params.append('recordsPorPagina', cantidadRegistrosAMostrar);
    return this.http.get<actorDTO[]>(this.apiURL, {observe: 'response', params});
  }

  public borrar(id: number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  public obtenerPorId(id: number){
    return this.http.get<actorDTO>(`${this.apiURL}/${id}`);
  }

  public editar(id: number, actor: actorCreacionDTO){
    const formData = this.construirFormData(actor);
    return this.http.put(`${this.apiURL}/${id}`, formData);
  }

  private construirFormData(actor: actorCreacionDTO): FormData {
    const formData = new FormData();

    formData.append('nombre', actor.nombre);
    if (actor.biografia){
      formData.append('biografia', actor.biografia);
    }
    if (actor.fechaNacimiento){
      formData.append('fechaNacimiento', formatearFecha(actor.fechaNacimiento));
    }
    if (actor.foto){
      formData.append('foto', actor.foto);
    }

    return formData;
  }
}
