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
  employementdetails:FormGroup;
  insuranceplandetails:FormGroup;
  healthinformation:FormGroup;
  dependentinformation:FormGroup;
 additionalinformation:FormGroup;

  constructor(private fb:FormBuilder,private router:Router , private s :CommonServiceService) { }
ngOnInit(): void {

   this.userReg=this.fb.group({
            loginDetails:this.fb.group({
            username: this.fb.control(""),
            setpassword:this.fb.control("")
          }) ,
          personDetails:this.fb.group({
            fullname: this.fb.control(""),
            gender:this.fb.control(""),
            dateofbirth:this.fb.control("")
        }) ,
          contactDetails:this.fb.group({
          contactno:this.fb.control(""),
          address:this.fb.control(""),
          pincode:this.fb.control("")
       })  ,
          employementdetails:this.fb.group({
          employementstatus:this.fb.control(""),
          occupation:this.fb.control(""),
          workingAddress:this.fb.control("")
       })  ,
          healthinformation:this.fb.group({
          primarycarePhysician:this.fb.control(""),
          preExistingmedicalCondition:this.fb.control(""),
          currentMedication:this.fb.control("")
      })  ,
            dependentinformation:this.fb.group({
            nameofDependent:this.fb.control(""),
            reletionwithdependent:this.fb.control(""),
            birthdate:this.fb.control(""),
            age:this.fb.control("")
        })  ,
          insuranceplanDetails:this.fb.group({
          coverageType:this.fb.control(""),
          coverageStartdate:this.fb.control(""),        
        })  ,
         
        premiumcalculation:this.fb.group({
          age:this.fb.control(""),
          gender:this.fb.control(""),
          coverageType:this.fb.control(""),         
        })  ,
        uploaduserDocuments:this.fb.group({
          // id:this.fb.control(""),
       
          panCard:this.fb.control(""),        
          adharCard:this.fb.control(""),
          photo:this.fb.control(""),
          verificationStatus:this.fb.control(""),

        })  ,
        
            additionalinformation:this.fb.group({
            preferedmethodforcommunication:this.fb.control(""),
            howhereabout:this.fb.control(""),
      
     })  

  }) 
}



  onSubmit()
  {
      this.step=this.step+1;
      // if(this.step==8){
      //   // this.router.navigate([\thankyou] );
      // }
       console.log(this.userReg.value)
           this.s.saveRegistration(this.userReg.value).subscribe();
           alert("User Registered Successfully...!")
           


  }    

  previous()
  {
      this.step=this.step-1;
  }
 
next()
{
  this.step=this.step+1;
}


}
