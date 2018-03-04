import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SecurityService} from './security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  title = 'Demo';
  greeting:any = {id:'',content:''};
  

  constructor(private http:HttpClient, 
              private service:SecurityService , 
              private router:Router){ 

              this.service.authenticate({}, undefined);
  }

  authenticated() { return this.service.authenticated; }

  
  ngOnInit() {
  }

}
