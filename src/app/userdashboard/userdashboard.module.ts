import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserdashboardRoutingModule } from './userdashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    UserdashboardRoutingModule
  ],
  declarations: [DashboardComponent]
})
export class UserdashboardModule { }
