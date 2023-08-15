import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.css']
})
export class DiretivasEstruturaisComponent implements OnInit {
  contador: number = 0
  condition: boolean = true
  conditionClick: boolean = true
  list: Array<{ nome: string, idade: number }> = [
    { nome: "Gilmar", idade: 27 },
    { nome: "Ana", idade: 96 },
    { nome: "Breno", idade: 27 },
    { nome: "Livia", idade: 20 }]
  nome: string = 'gil'
  ngOnInit(): void {
    setInterval(() => {
      this.condition = !this.condition
      this.contador++
    }, 1000)
  }

  onClick(): void {
    this.conditionClick = !this.conditionClick
  }

  onClickAddList(): void {
    this.list.push({ nome: "Nay", idade: 0 })
  }

  onClickEventList(event: number): void {
    this.list.splice(event, 1)
  }

}
