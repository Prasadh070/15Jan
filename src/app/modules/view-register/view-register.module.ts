import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRegisterRoutingModule } from './view-register-routing.module';
import { ViewRegistrationComponent } from './view-registration/view-registration.component';


@NgModule({
  declarations: [
    ViewRegistrationComponent
  ],
  imports: [
    CommonModule,
    ViewRegisterRoutingModule
  ]
})
export class ViewRegisterModule { }
