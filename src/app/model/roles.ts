export class Roles {
    public static userroles:Array<any>=[
        //0
        {
            admin:[
                    {label:'View Enquiry',path:'statistics'},
                    {label:'View Registration',path:'add_emp'},
                    // {label:'update Register',path:'view_emp'},
                    {label:'View Defaulters',path:'view_defaulters'}
                 ],
            
              re:[
                {label:'Add Enquiry',path:'add_enquiry'},
                {label:'View Enquiry',path:'view_enquiry'}

              ]   
        }
        
    ]
}
