import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItem } from '../shared/model/cartItem';
import { Cart } from '../shared/model/Cart';
import { ServiceService } from '../services/shopsy/service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart!: Cart;
  constructor(private cartService: CartService){ 
    this.setCart();
  }
   ngOnInit(): void {
   }
   setCart(){
    this.cart=this.cartService.getCart();
   }
   removeFromCart(cartItem: CartItem){
    this.cartService.removeFromCart(cartItem.shopsee.id);
    this.setCart();  //Instance Load Data
   }
   changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity= parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.shopsee.id, quantity);
    this.setCart();
   }
}
