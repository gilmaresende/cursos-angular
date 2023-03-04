import { API_CONFIG } from './../config/api.config';
import { Tecnico } from './../models/tecnico';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {
  delete(id: any): Observable<Tecnico> {
    return this.http.delete<Tecnico>(`${API_CONFIG.baseURL}/tecnicos/${id}`);
  }

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Tecnico> {
    return this.http.get<Tecnico>(`${API_CONFIG.baseURL}/tecnicos/${id}`);
  }

  findAll(): Observable<Tecnico[]> {
    return this.http.get<Tecnico[]>(`${API_CONFIG.baseURL}/tecnicos`);
  }

  create(tecnico: Tecnico): Observable<Tecnico> {
    return this.http.post<Tecnico>(`${API_CONFIG.baseURL}/tecnicos`, tecnico);
  }

  update(tecnico: Tecnico): Observable<Tecnico> {
    return this.http.put<Tecnico>(`${API_CONFIG.baseURL}/tecnicos/${tecnico.id}`, tecnico);
  }
}
