import { ModelBase } from "./modelbase";

export interface Cliente extends ModelBase {
   nome: string;
   cpf: string;
   email: string;
   senha: string;
   perfis: string[];
   dataCriacao: any
}