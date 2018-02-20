import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(private rout:ActivatedRoute){}

  title = 'app';
  private isLoggedIn:boolean = false;

  private login(){
    this.isLoggedIn = true;
  } 

  private logout(){
      this.isLoggedIn = false;
  }
}
