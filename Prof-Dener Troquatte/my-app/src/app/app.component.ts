import {
  Component,
} from '@angular/core';

interface Pessoa {
  nome: string,
  idade: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {


  addValue: number = 0
  public getDados: Pessoa | undefined

  add() {
    this.addValue++
  }

  setDados(event: Pessoa): void {
    this.getDados = event
  }
}
