import { Shopsy } from "./shopsy";

export class CartItem{
    constructor(shopsee: Shopsy){
        this.shopsee= shopsee;
        // this.price;
    }
    shopsee: Shopsy;
    quantity: number=1;

    get price(): number{
        return this.shopsee.price * this.quantity;
    }
}