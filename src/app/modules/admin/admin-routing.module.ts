import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewStatisticsComponent } from './view-statistics/view-statistics.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

import { ViewRegistrationComponent } from './view-registration/view-registration.component';



const routes: Routes = [
  {path:'statistics',component:ViewStatisticsComponent},
  {path:'add_emp',component:AddEmployeeComponent},
  {path:'view_emp/:data', component:ViewRegistrationComponent}
// {path:'register', component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { 


 
    
    

  



   







}
