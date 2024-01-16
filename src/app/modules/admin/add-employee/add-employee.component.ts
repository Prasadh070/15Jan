import { Component } from '@angular/core';
import { EnquiryForm } from 'src/app/model/enquiry-form';
import { User } from 'src/app/model/user';
import { CommonServiceService } from 'src/app/service/common-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {


  constructor(private s:CommonServiceService){}



  user:User[];

  
 ngOnInit(): void {

   this.s.getUser().subscribe((ur:User[])=>{

    this.user=ur;
   })
  }

  // updateData(user:User) {

  //   this.s.u
    
  //   }
    


  delete(us:User) {

    this.s.deleteRegister(us).subscribe();
    window.location.reload()

    
    }


}
