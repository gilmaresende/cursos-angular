import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-title *ngIf="destruir"></app-title>
  <br>
  <button (click)="desctruirComponent()">Destruir componet</button>
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {

  public destruir: boolean = true

  ngOnInit(): void {
  }

  public desctruirComponent(): void {
    this.destruir = false
  }
}
