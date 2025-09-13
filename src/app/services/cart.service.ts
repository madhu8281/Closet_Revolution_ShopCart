import { Injectable } from '@angular/core';
import { Cart } from '../shared/model/Cart';
import { Shopsy } from '../shared/model/shopsy';
import { CartItem } from '../shared/model/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart= new Cart();
  addToCart(shopsee:Shopsy):void{
    let cartItem=this.cart.items.find(item => item.shopsee.id=== shopsee.id);
    if(cartItem){
      this.changeQuantity(shopsee.id, cartItem.quantity +1)
      return;
    }
    this.cart.items.push(new CartItem(shopsee));
  }

  removeFromCart(shopseeId:number):void{
    this.cart.items = this.cart.items.filter(item => item.shopsee.id != shopseeId)
  }
  changeQuantity(quantity:number, shopseeId:number){
    let cartItem = this.cart.items.find(item =>item.shopsee.id !=shopseeId)
    if(!cartItem) return;
    cartItem.quantity= quantity;
  }
  getCart():Cart{
    return this.cart;
  }
}
