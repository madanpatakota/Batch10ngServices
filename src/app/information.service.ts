
import { EventEmitter  } from  '@angular/core';

export class InformationService{



   eventEmitter = new EventEmitter<any>();

      /*it will take the data and upload that into eventemitter . if any one subscribe then they will get the updates */

   receivedData(companyName : string){
       this.eventEmitter.emit(companyName);
   }


}