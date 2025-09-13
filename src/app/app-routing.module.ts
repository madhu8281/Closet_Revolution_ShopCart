import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopsypageComponent } from './shopsypage/shopsypage.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [ 
  {
    path:'',component:HomeComponent
  },
  {
    path:'search/:searchItem',component:HomeComponent
  },
  {
    path:'tag/:tag',component:HomeComponent
  },
  {
    path:'shopsee/:id',component:ShopsypageComponent
  },
  {
    path:'cart',component:CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
