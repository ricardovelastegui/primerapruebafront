import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recluso } from './recluso';

@Injectable({
  providedIn: 'root'
})
export class ReclusoservService {

  private baseURL = "http://localhost:8090/recluso"

  constructor(private httpClient: HttpClient) { }

  //con esto obtengo los empleados  
  obtenerreclusos():Observable<Recluso[]>{
    return this.httpClient.get<Recluso[]>(`${this.baseURL}/obtener`);
  }

  obtenerporId(id: number): Observable<Recluso>{
    return this.httpClient.get<Recluso>(`${this.baseURL}/obtener/${id}`);
  } 


  //esto metodo sirve para registrar un video nuevo
  agregarrecluso(recluso: Recluso): Observable<Object>{

    return this.httpClient.post(`${this.baseURL}/agregar`, recluso);

  }

  actualizar(id:number, recluso:Recluso) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/modificar/${id}`,recluso);
  }

  eliminar(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/borrar/${id}`);
  }

}
