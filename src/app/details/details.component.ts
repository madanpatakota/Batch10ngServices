import { Component , OnInit } from '@angular/core';
import { CompanyService } from '../company.service';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
 // providers : [ CompanyService ]
})
export class DetailsComponent implements OnInit {

  constructor(public companyService : CompanyService){
   
  }


  companiesDetails:any = [];
  ngOnInit(): void {
      // you want to take subscriptions this is the best place..
      //How we implemnt arrow function in filter of array

      //subscribe

     // {CompanyName: 'MisardFirst.com', Industry: 'ITFirst'}
      this.companyService.eventEmitter.
      subscribe((details : any)=>{
            console.log("Details are " , details);
            // i am pushing strings only into the companiesdetails. 
            // try to push object.

            this.companiesDetails.push(details.CompanyName);
      });


      this.companyService.postEventEmitter.subscribe((data:any)=>{
          this.companiesDetails.push(data);
      })



  }

  







    

}
