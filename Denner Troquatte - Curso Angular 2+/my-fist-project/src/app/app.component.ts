import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  {{valor}}
  <button (click)="alterValue()">Adicionar</button>
  <app-title title="Hello World"/>
  <router-outlet></router-outlet>`

})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked,
  AfterContentInit {

  valor: number = 7

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit")
  }

  ngDoCheck(): void {
    console.log("ngDoCheck")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }

  alterValue(): number {
    return this.valor += 1
  }

}
