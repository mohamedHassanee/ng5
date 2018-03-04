import { Component } from '@angular/core';
import { Router} from '@angular/router';
import {SecurityService} from './security/security.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(private router:Router , private service:SecurityService){}

  title = 'app';
   isLoggedIn:boolean = false;

   login(){
    this.isLoggedIn = true;
  } 

   logout(){
      this.isLoggedIn = false;
      this.service.authenticated = false;
      this.router.navigateByUrl('/login');
  }
}
