import { Component, OnInit } from '@angular/core';
import {SecurityService} from '../security/security.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  error : boolean = false;
  credentials : any = {username:'' , password:''};
  constructor(private service:SecurityService, private router:Router) { }

  ngOnInit() {
  }

  login(){

    console.log(this.credentials);
    this.service.authenticate(this.credentials, () => {
      this.router.navigateByUrl('/');
  });
  return false;
  }

}
