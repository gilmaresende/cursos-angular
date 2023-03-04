import { ModelBase } from "./modelbase";

export interface Chamado extends ModelBase {
   dataAbertura?: string;
   dataFechamento?: string;
   prioridade: string;
   status: string;
   titulo: string;
   descricao: string;
   tecnico: any;
   cliente: any;
   nomeCliente: string;
   nomeTecnicno: string

}