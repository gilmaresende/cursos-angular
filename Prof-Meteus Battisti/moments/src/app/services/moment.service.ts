import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { Moment } from '../Moment';
import { environment } from 'src/environments/environment.prod';
import { Response } from '../Response';

@Injectable({
  providedIn: 'root'
})
export class MomentService {

  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}api/moments`

  constructor(private hhtp: HttpClient) {

  }

  createMoment(formData: FormData): Observable<FormData> {
    return this.hhtp.post<FormData>(this.apiUrl, formData);
  }

  getMoments(): Observable<Response<Moment[]>> {
    return this.hhtp.get<Response<Moment[]>>(this.apiUrl)
  }

  getMoment(id: number): Observable<Response<Moment>> {
    const url = `${this.apiUrl}/${id}`;
    return this.hhtp.get<Response<Moment>>(url)
  }

  removeMoment(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.hhtp.delete(url)
  }

  updateMoment(id: number, formaData: FormData): Observable<FormData> {
    const url = `${this.apiUrl}/${id}`;
    return this.hhtp.put<FormData>(url, formaData)
  }

}
