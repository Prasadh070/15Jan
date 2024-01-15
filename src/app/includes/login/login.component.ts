import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

  constructor(private fb:FormBuilder,private router:Router){}

  loginForm:FormGroup;

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:[],
      password:[]
    })
  }
  
  onLogin()
  {
    let un:string=this.loginForm.controls['username'].value;
    let ps:string=this.loginForm.controls['password'].value;
    
    if(un=='admin123' && ps=='admin@123')
    {
          sessionStorage.setItem('role','admin')

          this.router.navigateByUrl('/apnafinance/admin')
          // this.router.navigateByUrl('/apnafinance/admin');   
    }
    else if(un=='re123' && ps=='re@123')
    {
          sessionStorage.setItem('role','re')

          this.router.navigateByUrl('/apnafinance/re');   
    }
    else{
      alert('Enter valid username or password..!')
    }
  }
}
