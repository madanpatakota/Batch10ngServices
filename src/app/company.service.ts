// Service also one kind of a normal class 

//class how many kind of members we will be have.....
// property 
// method
// constrcutor.

import { EventEmitter , Injectable} from '@angular/core'
import { InformationService } from './information.service';


@Injectable()
export class CompanyService{

      constructor(public informationService : InformationService ){

      }


     // 1. preparing the name
      
      CompanyName = "Misard.com"    // one member....... 
      
      Industry    = "IT"; 

      eventEmitter = new EventEmitter<any>();

      sendCompanyDetails(companyName : string , industry : string){
            var companyDetails = 
            { 
                  "CompanyName" :  companyName ,
                   "Industry" : industry 
            };
            //upload

            //eventEmitter useful for to process the data...
            this.eventEmitter.emit(companyDetails);

            return companyDetails;
      }


      postEventEmitter = new EventEmitter<any>();
      

      
      postCompanyDetails(companyUpdates : string){
            this.postEventEmitter.emit(companyUpdates);   // not only emitting the data.

            this.informationService.receivedData(companyUpdates); // but also i am passing companyupdates information tot the informationService

      }


}




