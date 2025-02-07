import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',

})

export class SignUpComponent {

  constructor(private router: Router){

  }

  pageRouter(path: string): void{
    this.router.navigate([path])
  }

}
