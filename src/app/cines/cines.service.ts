import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroments';
import { cineCreacionDTO, cineDTO } from './cines';

@Injectable({
  providedIn: 'root'
})
export class CinesService {
  constructor(private http: HttpClient) { }

  private apiURL = enviroment.apiURL + 'cines';

  public obtenerTodos(pagina: number, cantidadRegistrosAMostrar: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('pagina', pagina);
    params = params.append('recordsPorPagina', cantidadRegistrosAMostrar);
    return this.http.get<cineDTO[]>(this.apiURL, {observe: 'response', params});
  }

  public obtenerPorId(id: number){
    return this.http.get<cineDTO>(`${this.apiURL}/${id}`);
  }
  
  public crear(cine: cineCreacionDTO) {
    return this.http.post(this.apiURL, cine);
  }

  public editar(id: number, cine: cineCreacionDTO){
    return this.http.put(`${this.apiURL}/${id}`, cine);
  }

  public borrar(id: number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
