import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroments';
import { generoCreacionDTO, generoDTO } from './Genero';

@Injectable({
  //Este servicio es un singletons
  providedIn: 'root'
})
export class GenerosService {

  private apiURL = enviroment.apiURL + 'generos';

  constructor(private http: HttpClient) { }

  public obtenerTodos(pagina: number, cantidadRegistrosAMostrar: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('pagina', pagina);
    params = params.append('recordsPorPagina', cantidadRegistrosAMostrar);
    return this.http.get<generoDTO[]>(this.apiURL, {observe: 'response', params});
  }

  public obtenerPorId(id: number){
    return this.http.get<generoDTO>(`${this.apiURL}/${id}`);
  }

  public crear(genero: generoCreacionDTO) {
    return this.http.post(this.apiURL, genero);
  }

  public editar(id: number, genero: generoCreacionDTO){
    return this.http.put(`${this.apiURL}/${id}`, genero);
  }

  public borrar(id: number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
