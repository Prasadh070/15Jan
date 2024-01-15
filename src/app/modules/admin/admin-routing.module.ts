import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewStatisticsComponent } from './view-statistics/view-statistics.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const routes: Routes = [
  {path:'statistics',component:ViewStatisticsComponent},
  {path:'add_emp',component:AddEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
