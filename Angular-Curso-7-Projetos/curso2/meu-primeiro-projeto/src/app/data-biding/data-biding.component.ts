import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {



  public nome: string = "Joao"
  public idade: number = 29
  public maisUm: string = "Mais Um"

  public position: { x: number, y: number } = { x: 0, y: 0 }

  constructor() { }

  public checkedDisabled: boolean = true;
  public imgJava: string = "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png"
  public imgTitle: string = "Java Logo"

  ngOnInit(): void {
  }

  public alertaInf(valor: MouseEvent): void {
    console.log(valor)
  }

  public mouseMoveTeste(valor: MouseEvent): void {
    this.position.x = valor.offsetX
    this.position.y = valor.offsetY
  }

}
