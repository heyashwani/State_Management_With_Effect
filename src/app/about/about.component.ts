import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {

  constructor(private router:Router){

  }
  pageRedirect(path:string){
    this.router.navigate([path])
  }
}
