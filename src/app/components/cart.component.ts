import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../models';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input()
  CartItem !: Item[] 

  @Output()
  NewCartItem = new EventEmitter<Item[]>();

  pressed(item: Item) {
    // Find the index of the item in the array
    const index = this.CartItem.findIndex(i => i.id === item.id);
  
    // If the item exists in the array
    if (index !== -1) {
      // If the quantity is greater than 1, decrement it
      if (this.CartItem[index].quantity > 1) {
        this.CartItem[index].quantity--;
      } else {
        // Otherwise, remove the item from the array and emit the updated array
        this.CartItem.splice(index, 1);
      }
  
      // Emit the updated CartItem array through the NewCartItems output property
      this.NewCartItem.emit(this.CartItem);
    }
  }
}
