import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'oi-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  login(){
    if(this.username && this.password && this.username.toLowerCase()==="nightking" && this.password==="Outside!n"){
      this.router.navigate(['dashboard']);
    
    }
    else{
      alert('Invalid Credentials');
    }
  }
}
