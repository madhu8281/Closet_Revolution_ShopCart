import { Injectable } from '@angular/core';
import { Shopsy } from 'src/app/shared/model/shopsy';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  constructor() { }

  getShopsyById(id:number): Shopsy{
    return this.getAll().find(shopsee => shopsee.id==id)!;
  }

  getAll():Shopsy[]{
    return[
      {
        id: 1,
        name: 'Women casual dress',
        fabric: 'Cotton',
        price: 50,
        favorite: true,
        origin: ['Indian'],
        imageUrl: '/assets/img1.jpg',
      },
      {
        id: 2,
        name: 'Black solid casual top and cozy wide legged trouser',
        fabric: 'Georgette Top and Denim Trouser',
        price: 100,
        favorite: false,
        origin: ['London'],
        imageUrl: '/assets/img2.jpg',
      },
      {
        id: 3,
        name: 'Black solid casual top',
        fabric: 'Georgette Top',
        price: 40,
        favorite: true,
        origin: ['London'],
        imageUrl: '/assets/img3.jpg',
      },
      {
        id: 4,
        name: 'Womens Mustard Poly Chiffon Kurti',
        fabric: 'Chiffon',
        price: 60,
        favorite: false,
        origin: ['Indian'],
        imageUrl: '/assets/img4.jpg',
      },
      {
        id: 5,
        name: 'Peach Midi Casual dress',
        fabric: 'Georgette ',
        price: 200,
        favorite: true,
        origin: ['Indian'],
        imageUrl: '/assets/img5.jpg',
      },
      {
        id: 6,
        name: 'Floral Tiered Ruffled Mini Yellow Dress',
        fabric: 'Polyester',
        price: 100,
        favorite: false,
        origin: ['Indian'],
        imageUrl: '/assets/img6.jpg',

      },
      {
        id: 7,
        name: 'Boat necked sleeve belted dress',
        fabric: 'Polyester',
        price: 150,
        favorite: false,
        origin: ['Indian'],
        imageUrl: '/assets/img7.jpg',
      },
      {
        id: 8,
        name: 'Olive Green Dress',
        fabric: 'Georgette',
        price: 200,
        favorite: false,
        origin: ['Indian'],
        imageUrl: '/assets/img8.jpg',
      },
      {
        id: 9,
        name:'Blue dress',
        fabric: 'Georgette',
        price: 200,
        favorite: true,
        origin: ['Indian'],
        imageUrl: '/assets/img1.jpg'
      }
      // '/assets/img1.jpg',
      
      // '/assets/img2.jpg',
      // '/assets/img3.jpg',
      // '/assets/img4.jpg',
      // '/assets/img5.jpg',
      // '/assets/img6.jpg',
      // '/assets/img7.jpg',
      // '/assets/img8.jpg',
    ];
  }
}
