import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'oi-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  submit(){
    alert('Registration under progress!!');
  }
}
