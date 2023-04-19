import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fisrt-component',
  templateUrl: './fisrt-component.component.html',
  styleUrls: ['./fisrt-component.component.css']
})
export class FisrtComponentComponent implements OnInit{

  name: string = "Gilmar";
  age: number =  27;
  job  = "Programmer";
  hobbies = ["Coorer", "Jogar", "Estudar"]

  ngOnInit(): void {
  }

}
