import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonServiceService } from 'src/app/service/common-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{

  constructor(private fb:FormBuilder , private s:CommonServiceService) {}
 


    EnquiryForm:FormGroup

    ngOnInit(): void {
      
      this.EnquiryForm=this.fb.group({

        e_name:[],
        e_contactNo:[],
        e_email:[]



      })

       

    }

    onSave(){

  
       alert("save Enquiry")

      console.log(this.EnquiryForm.value)
      console.log(this.EnquiryForm.controls['e_name'].value)
     this.s.saveData(this.EnquiryForm.value).subscribe()
     window.location.reload();






    }


}
