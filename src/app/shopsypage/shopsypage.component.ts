import { Component, OnInit } from '@angular/core';
import { Shopsy } from '../shared/model/shopsy';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../services/shopsy/service.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shopsypage',
  templateUrl: './shopsypage.component.html',
  styleUrls: ['./shopsypage.component.css']
})
export class ShopsypageComponent implements OnInit{
  shopsee!:Shopsy;
  constructor(private activatedRoute:ActivatedRoute, 
    private ServiceService:ServiceService, private cartService:CartService,
    private router:Router){
    activatedRoute.params.subscribe((params)=>{
      if(params['id'])
      this.shopsee= ServiceService.getShopsyById(params['id']);
    })

  }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addToCart(this.shopsee);
    this.router.navigateByUrl('/cart')
  }
}
