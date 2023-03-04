import { Injectable } from '@angular/core';
import { Tecnico } from './../models/tecnico';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService extends BaseService<Tecnico>{
  rote: String = "tecnicos"
}
