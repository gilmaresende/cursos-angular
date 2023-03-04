import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from '../config/api.config';
import { ModelBase } from '../models/modelbase';

@Injectable({
   providedIn: 'root'
})
export class BaseService<Tipo extends ModelBase> {

   rote: String

   constructor(private http: HttpClient) { }


   delete(id: any): Observable<Tipo> {
      return this.http.delete<Tipo>(`${API_CONFIG.baseURL}/${this.rote}/${id}`);
   }

   findById(id: any): Observable<Tipo> {
      return this.http.get<Tipo>(`${API_CONFIG.baseURL}/${this.rote}/${id}`);
   }

   findAll(): Observable<Tipo[]> {
      return this.http.get<Tipo[]>(`${API_CONFIG.baseURL}/${this.rote}`);
   }

   create(tipo: Tipo): Observable<Tipo> {
      return this.http.post<Tipo>(`${API_CONFIG.baseURL}/${this.rote}`, tipo);
   }

   update(tipo: Tipo): Observable<Tipo> {
      return this.http.put<Tipo>(`${API_CONFIG.baseURL}/clientes/${tipo.id}`, tipo);
   }

}