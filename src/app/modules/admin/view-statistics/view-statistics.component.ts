import { Component } from '@angular/core';
import { EnquiryForm } from 'src/app/model/enquiry-form';
import { User } from 'src/app/model/user';
import { CommonServiceService } from 'src/app/service/common-service.service';

@Component({
  selector: 'app-view-statistics',
  templateUrl: './view-statistics.component.html',
  styleUrls: ['./view-statistics.component.css']
})
export class ViewStatisticsComponent {


  
  constructor(private s:CommonServiceService){}


  

  enquiry:EnquiryForm[];
 ngOnInit(): void {


   this.s.getEnquiry().subscribe(( ef:EnquiryForm[])=>
   {
     this.enquiry=ef;
     console.log(this.enquiry.values)
     
   })


   
   
  }


}
