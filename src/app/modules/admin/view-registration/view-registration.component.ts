import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { CommonServiceService } from 'src/app/service/common-service.service';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {


  constructor(private fb:FormBuilder,private router:Router , private s :CommonServiceService, private activeRout:ActivatedRoute) { }

  step:any=1;
  userReg: FormGroup;

  ngOnInit(): void {

   this.userReg=this.fb.group({
              id:[0],
          username: [],
          setpassword:[],
            fullname:[],
            gender:[],
            dateofbirth:[],
            contactno:[],
            address:[],
            pincode:[] ,

         ed:this.fb.group({
          employementstatus:[],
          occupation:[],
          workingAddress:[] ,
        })  ,
          hi:this.fb.group({
            primarycarePhysician:[],
            preExistingmedicalCondition:[],
            currentMedication:[]
       
      })  ,
         
      depedentinfomation:this.fb.group({
            nameofDependent:[],
            reletionwithdependent:[],
            birthdate:[],
            age:[],
          })  ,
            ipd:this.fb.group({
            coverageType:[],
            coverageStartdate:[],   
          })  
             ,
  
          
      
           addi:this.fb.group({
           preferedmethodforcommunication:this.fb.control(""),
           howhereabout:this.fb.control("")                  
           })            
          }) 
          this.patchEditvalue() 
          
}
     
          onSubmit() {

            if(this.userReg.controls['id'].value==0)
            {

          
                console.log(this.userReg.value)
                this.s.saveRegistration(this.userReg.value).subscribe();
               

              
            }
            else
            {
              this.s.updateRegister(this.userReg.value).subscribe();
              alert("update Register")
              // this.router.navigate(['apnafinance/admin/add_emp'])
            }
            // this.userReg.reset();
            


          }
           previous() {
          this.step=this.step-1;
          }
          next() {
            
            this.step=this.step+1;
          }

          patchEditvalue(){

            this.activeRout.paramMap.subscribe(
              
              param=>{

                let userjson:string=param.get('data')
                let editDetails:User=JSON.parse(userjson);
                console.log(editDetails)
                this.userReg.patchValue(editDetails)
              }
            )
          }
         


}