import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EnquiryForm } from 'src/app/model/enquiry-form';
import { User } from 'src/app/model/user';
import { CommonServiceService } from 'src/app/service/common-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {


  constructor(private s:CommonServiceService , private router:Router){}



  user:User[];

  
 ngOnInit(): void {

   this.s.getUser().subscribe((ur:User[])=>{

    this.user=ur;
   })
  }

  
  editData(userr:User) {

    // let userjson:string=JSON.stringify(userr);
    // console.log(userjson)
    //      this.router.navigateByUrl('view_emp')

    
    // const userjson=JSON.stringify(userr);
    // console.log(userjson)
    //      this.router.navigateByUrl('register'+userjson)
    
    let userjson:string=JSON.stringify(userr);
    console.log(userjson)
         this.router.navigate(['apnafinance/admin/view_emp',userjson])

    }
    


  delete(us:User) {

    this.s.deleteRegister(us).subscribe();
    window.location.reload()

    
    }


}
