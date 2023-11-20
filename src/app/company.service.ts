// Service also one kind of a normal class 

//class how many kind of members we will be have.....
// property 
// method
// constrcutor.

import { EventEmitter} from '@angular/core'
import { Subject } from 'rxjs';

export class CompanyService{
     // 1. preparing the name
      CompanyName = "Misard.com"    // one member....... 
      Industry    = "IT"; 

      eventEmitter = new EventEmitter<any>();

      //subject =  new Subject()

      sendCompanyDetails(companyName : string , industry : string){
            var companyDetails = 
            { 
                  "CompanyName" :  companyName ,
                   "Industry" : industry 
            };
            //upload
            //this.eventEmitter.emit("companyDetails");
            return companyDetails;
      }


}




