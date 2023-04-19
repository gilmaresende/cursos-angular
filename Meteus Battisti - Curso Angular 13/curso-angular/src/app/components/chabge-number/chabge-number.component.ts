import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chabge-number',
  templateUrl: './chabge-number.component.html',
  styleUrls: ['./chabge-number.component.css']
})
export class ChabgeNumberComponent {

  @Output() changeNumber: EventEmitter<any> = new EventEmitter()

  handleClick(){
   this.changeNumber.emit();
  }
}
