import { API_CONFIG } from './../config/api.config';
import { Cliente } from './../models/cliente';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends BaseService<Cliente> {

  rote: String = "clientes"

}
