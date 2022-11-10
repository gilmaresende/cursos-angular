import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

    <app-diretivas-esttuturais></app-diretivas-esttuturais>
<!--  <br>

  <br>
   <app-data-biding></app-data-biding>

  <br>
-->

  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
  }
}
