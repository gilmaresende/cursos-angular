import { Injectable } from "@angular/core";
import { Chamado } from "../models/chamado";
import { BaseService } from "./base.service";

@Injectable({
   providedIn: 'root'
})
export class ChamadoService extends BaseService<Chamado> {

   rote: String = "clientes"

}