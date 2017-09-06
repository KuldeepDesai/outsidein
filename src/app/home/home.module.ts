import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ],
  declarations: [HomeComponent, LoginComponent, RegisterComponent]
})
export class HomeModule { }
