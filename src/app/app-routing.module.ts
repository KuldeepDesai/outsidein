import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NotfoundComponent} from "./notfound/notfound.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch:'full'
  },
  {
    path:'home',
    loadChildren:'app/home/home.module#HomeModule'
  },
  {
    path:'dashboard',
    loadChildren:'app/userdashboard/userdashboard.module#UserdashboardModule'
  },
  {
    path:'**',
    component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
