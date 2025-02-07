import { Component, OnInit} from '@angular/core';
import { NavigationEnd, Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent implements OnInit{
  title = 'ICDigitalss';

  constructor(private router: Router){}

  ngOnInit(): void {

    this.router.events.subscribe(event=>{
      if(event instanceof NavigationEnd){
        setTimeout(() => {
          window.scrollTo({top: 0, behavior: 'smooth'});
        }, 100);
      }
    });
  
  }
}
