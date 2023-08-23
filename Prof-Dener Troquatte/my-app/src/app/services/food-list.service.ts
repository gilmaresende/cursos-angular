import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  private list: Array<string> = ['x-bacon', 'feijão', 'ovo'];

  public getList(): Array<string> {
    return this.list;
  }

  constructor() {}
}
