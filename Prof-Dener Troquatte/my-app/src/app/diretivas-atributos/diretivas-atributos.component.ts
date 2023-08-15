import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.css']
})
export class DiretivasAtributosComponent implements OnInit {
  valor: boolean = false
  altura: string = '20px'
  ngOnInit(): void {
    setInterval(() => {
      this.valor = !this.valor
      if (this.valor) {
        this.altura = "45px"
      } else {
        this.altura = "25px"
      }
    }, 2000)

  }
  list: Array<{ nome: string }> = []
  nome: string = ""

  salvar(): void {
    this.list.push({ nome: this.nome })
    this.nome = ''
  }


  date: Date = new Date()
}
