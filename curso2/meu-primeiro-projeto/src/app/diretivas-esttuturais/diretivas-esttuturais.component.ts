import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-esttuturais',
  templateUrl: './diretivas-esttuturais.component.html',
  styleUrls: ['./diretivas-esttuturais.component.scss']
})
export class DiretivasEsttuturaisComponent implements OnInit {

  public condicao: boolean = true
  public condicaoClick: boolean = true

  public list: Array<{ nome: string, idade: number }> = [{ nome: "Gilmar F", idade: 29 },
  { nome: "Gilmar F L Resende", idade: 26 }]

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.condicao = !this.condicao
    }, 5000)
  }

  public onClick() {
    this.condicaoClick = !this.condicaoClick
  }

  public onClickAddList() {
    this.list.push({ nome: " Nome", idade: 31 })
  }

  public onClickEventList(event: number) {
    this.list.splice(event, 1)
  }

}
