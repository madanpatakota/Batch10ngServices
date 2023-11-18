import { Component } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css'],
  providers : [CompanyService]
})


//new FirstCompComponent
export class FirstCompComponent {


   company:string;
   industry : string;
  //it will automatically load FirstCompComponent is registed in the appmodule . part of the class
   constructor(public _companyService : CompanyService){

      //var               a : string ;
      //    _companyService : CompanyService;
     
     // how to create the instance this companyservice...

     // how to create the instance the class...
     
    //  this.company = new CompanyService().CompanyName;
    //  this.industry = new CompanyService().Industry;
     

     this.company  =  _companyService.CompanyName;
     this.industry =  _companyService.Industry;






   }


   
   details:any = {};

   GetDetails(){
       
     this.details = this._companyService.sendCompanyDetails("MisardFirst.com", "ITFirst");


     this.company = this.details.CompanyName;
     this.industry = this.details.Industry;




   }



}
