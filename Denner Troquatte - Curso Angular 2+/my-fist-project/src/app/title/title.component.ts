import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

  @Input()
  title: string = 'App-Title'

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
