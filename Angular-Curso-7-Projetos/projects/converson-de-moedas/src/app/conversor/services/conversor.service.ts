import { Conversao } from '../models/conversao.model';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConversaoResponse } from '../models';
import { Observable } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  private readonly BASE_URL = "http:/api.fixe.io/latest"

  constructor(private http: HttpClientModule) { }

  converter(conversao: Conversao): Observable<any> {
    let params = `&base=${conversao.moeda}&symbols=${conversao.moedaPara}`;
    return this.http
      .get(this.BASE_URL + params);
  }
}
