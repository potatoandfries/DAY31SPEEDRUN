import { Component } from '@angular/core';
import { Item } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'd31workshop';

  CartItem: Item[] = [
    {
      id: '1',
      image: 'https://thebakermama.com/wp-content/uploads/2018/08/fullsizeoutput_15a7c.jpg',
      caption: 'Bacon',
      quantity: 1
    },
    {
      id: '2',
      image: 'https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg',
      caption: 'Egg',
      quantity: 1
    },
    {
      id: '3',
      image: 'https://i.ebayimg.com/images/g/2KcAAOSwYLFlNqzY/s-l1600.jpg',
      caption: 'Cheese',
      quantity: 1
    }
  ];

  NewCart: Item[] = [];

  add(item : Item){
     // Find the index of the item in the CartItem array
    const  index = this.NewCart.findIndex(i => i.id ===item.id);
    
    // If the item already exists in the array, increment its quantity
    if (index !== -1) {
      this.NewCart[index].quantity++;
    } else {
      // Otherwise, add the item to the array
      this.NewCart.push({ ...item, quantity: 1 });
    }
  }

   
  //this is for cart now:

  remove(updateCart: Item[]){
    this.NewCart= updateCart;
  }

}