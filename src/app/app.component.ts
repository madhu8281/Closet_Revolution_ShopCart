import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angular';
  title: any;

  constructor(
    private router : Router,
    private activatedRoute : ActivatedRoute,
    private titleService : Title
  ){}

  ngOnInit(){      // subscribe to NavigationEnd event
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),  // Event which subscribe to activatedRoute
    ).subscribe(() => {
      const rt= this.getChild(this.activatedRoute);     // current active Link
      rt.data.subscribe(data =>{        // to get data(title) according to current activated link
        console.log(data);
        this.titleService.setTitle(data['title']);      // use square bracket notation 
      });
    });
  }
  getChild(activatedRoute: ActivatedRoute): ActivatedRoute{
    if(activatedRoute.firstChild){
      return this.getChild(activatedRoute.firstChild);
    } else{
      return activatedRoute;
    }
  }
}
