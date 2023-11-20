import { Component , OnInit } from '@angular/core';
import { CompanyService } from '../company.service';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers : [ CompanyService ]
})
export class DetailsComponent implements OnInit {

  constructor(public companyService : CompanyService){
   
  }

  ngOnInit(): void {
      // you want to take subscriptions this is the best place..
      //How we implemnt arrow function in filter of array

      //subscribe
      this.companyService.eventEmitter.
      subscribe((details:string)=>{
            console.log("Details are " , details);
      })
  }

  







    

}
