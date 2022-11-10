import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-esttuturais',
  templateUrl: './diretivas-esttuturais.component.html',
  styleUrls: ['./diretivas-esttuturais.component.scss']
})
export class DiretivasEsttuturaisComponent implements OnInit {

  public condicao: boolean = true
  public condicaoClick: boolean = true

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.condicao = !this.condicao
    }, 5000)
  }

  public onClick() {
    this.condicaoClick = !this.condicaoClick
  }


}
