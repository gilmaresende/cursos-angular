import { ModelBase } from "./modelbase";

export interface Chamado extends ModelBase {
   dataAbertura?: string;
   dataFechamento?: string;
   prioridade: string;
   status: string;
   titulo: string;
   observacoes: string;
   tecnico: any;
   cliente: any;
   nomeCliente: string;
   nomeTecnico: string

}