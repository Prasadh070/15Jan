import { Additionalinformation } from "./additionalinformation";
import { Dependentinformation } from "./dependentinformation";
import { Employementdetails } from "./employementdetails";
import { Healthinformation } from "./healthinformation";
import { Insuranceplandetails } from "./insuranceplandetails";


export class User {
    id:number;
    username:string;
    setpassword:string;
    fullname:string;
    gender:string;
    dateofbirth:Date;
    contactno:number;
    address:string;
    pincode:number;
    
    ed: Employementdetails;
    hi:Healthinformation;
    depedentinfomation:Dependentinformation;
    ipd:Insuranceplandetails;
    addi:Additionalinformation;

}
