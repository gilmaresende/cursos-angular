import { Tarefa } from './../shared/tarefa.model';
import { TarefaService } from './../shared/tarefa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[]

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos()
  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos()
  }

  remover($event: any, tarefa: Tarefa): void {
    // $event.preventDefaut();
  }



}
