import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export default class TitleComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public title: string = 'Bem vindo';
  constructor() {
  }
  ngOnDestroy(): void {
    console.log('TitleComponent:ngOnDestroy');
  }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }

}
