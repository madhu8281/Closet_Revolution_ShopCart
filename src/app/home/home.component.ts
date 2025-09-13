import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/shopsy/service.service';
import { Shopsy } from '../shared/model/shopsy';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  shopsy:Shopsy[]=[];
  getAllShopsyByTag: any;

  constructor(private fs: ServiceService, private router:ActivatedRoute){ }

  ngOnInit(): void {
    this.router.params.subscribe(params=>{
      if(params['searchItem'])
      this.shopsy=this.fs.getAll().filter(shopsy=> shopsy.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
      else if(params['tag'])
      this.shopsy= this.getAllShopsyByTag(params['tag'])
      else
      this.shopsy = this.fs.getAll();
  })

  }
}
