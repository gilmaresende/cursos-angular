import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {

  @Output() enviarDados = new EventEmitter();

  list: Array<{ nome: string, idade: number }> = [
    { nome: 'Gilmar', idade: 27 },
    { nome: 'Ana', idade: 42 },
    { nome: 'Samuel', idade: 2 },
  ]

  getDados(index: number): void {
    this.enviarDados.emit(this.list[index])
  }
}
