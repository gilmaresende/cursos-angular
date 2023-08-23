import { Component, OnInit } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
})
export class FoodListComponent implements OnInit {
  list: Array<string> = [];

  constructor(private foodListService: FoodListService) {}

  ngOnInit(): void {
    this.list = this.foodListService.getList();
  }
}
