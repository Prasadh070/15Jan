import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './templates/home/home.component';
import { AboutComponent } from './templates/about/about.component';
import { HeaderComponent } from './templates/header/header.component';
import { ContactComponent } from './templates/contact/contact.component';
import { LoginComponent } from './includes/login/login.component';
import { AppLayoutComponent } from './includes/app-layout/app-layout.component';
import { EmiCalculatorComponent } from './templates/emi-calculator/emi-calculator.component';
import { HomepageComponent } from './templates/homepage/homepage.component';
import { RegistrationComponent } from './templates/registration/registration.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent,children:[
    {path:'',redirectTo:'homepage',pathMatch:'full'},
    {path:'homepage',component:HomepageComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegistrationComponent}

  ]},
  {
    path:'apnafinance',component:AppLayoutComponent, children:[

      {path:'admin', loadChildren:()=>import('./modules/admin/admin.module').then(m=>m.AdminModule)},
      {path:'re' ,loadChildren:()=>import('./modules/re/re.module').then(m=>m.ReModule)}
      // {path:'register/:data' , component:RegistrationComponent},
      // {path:'register/:data' , component:RegistrationComponent}


    ]
  },

  {

    // path:'register',component:RegistrationComponent
    path:'register/:data',component:RegistrationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
