import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/service/common-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  step:any=1;
  userReg: FormGroup;
//   employementdetails:FormGroup;
//   insuranceplandetails:FormGroup;
//   healthinformation:FormGroup;
//   dependentinformation:FormGroup;
//  additionalinformation:FormGroup;


  constructor(private fb:FormBuilder,private router:Router , private s :CommonServiceService) { }
ngOnInit(): void {

   this.userReg=this.fb.group({
            
          username: [],
          setpassword:[],
            fullname:[],
            gender:[],
            dateofbirth:[],
            contactno:[],
            address:[],
            pincode:[] ,

         employementdetails:this.fb.group({
          employementstatus:[],
          occupation:[],
          workingAddress:[] ,
        })  ,
          healthinformation:this.fb.group({
            primarycarePhysician:[],
            preExistingmedicalCondition:[],
            currentMedication:[]
       
      })  ,
         
            dependentinformation:this.fb.group({
            nameofDependent:[],
            reletionwithdependent:[],
            birthdate:[],
            age:[],
          })  ,
            insuranceplanDetails:this.fb.group({
            coverageType:[],
            coverageStartdate:[],   
          })  
             ,
  
          premiumcalculation:this.fb.group({
          age:this.fb.control(""),
          gender:this.fb.control(""),
          coverageType:this.fb.control(""),         
          }),
      
           additionalinformation:this.fb.group({
           preferedmethodforcommunication:this.fb.control(""),
           howhereabout:this.fb.control("")                  
           })            
          })  
          
}
     
          onSubmit() {
          //  this.step=this.step+1;
            // if(this.step==8){
            //   // this.router.navigate([\thankyou] );
            // }
                console.log(this.userReg.value)
                this.s.saveRegistration(this.userReg.value).subscribe();
                // window.location.reload();

                alert("User Registered Successfully...!")

          }
           previous() {
          this.step=this.step-1;
          }
          next() {
            
            this.step=this.step+1;
          }
         


}
