import { Additionalinformation } from "./additionalinformation";
import { Dependentinformation } from "./dependentinformation";
import { Employementdetails } from "./employementdetails";
import { Healthinformation } from "./healthinformation";
import { Insuranceplandetails } from "./insuranceplandetails";
import { Premimumcalculation } from "./premimumcalculation";
import { UploaduserDocuments } from "./uploaduser-documents";

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
    
    employementdetails: Employementdetails;
    healthinformation:Healthinformation;
    dependentinformation:Dependentinformation;
    Insuranceplandetails:Insuranceplandetails;
    premiumcalculation:Premimumcalculation;
    uploaduserDocuments:UploaduserDocuments;
    additionalinformation:Additionalinformation;

}
