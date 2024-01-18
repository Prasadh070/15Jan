import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ViewStatisticsComponent } from './view-statistics/view-statistics.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewRegistrationComponent } from './view-registration/view-registration.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ViewStatisticsComponent,
    AddEmployeeComponent,
    ViewRegistrationComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
