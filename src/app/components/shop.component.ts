import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from '../models';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

  @Input()
  shopItems !: Item[] ;

  @Output()
  NewCart = new Subject<Item>();

  pressed(item: Item): any{
    //when pressed > item is the result of the event.
    this.NewCart.next(item);
  }
}