import { Component } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.css'],
  providers:[CompanyService]
})


export class SecondCompComponent {


  industry : string;
  name : string ;

  constructor(public companyService  :CompanyService){

    this.industry = companyService.Industry;
    this.name     = companyService.CompanyName;

      
  }




  
   
  details:any = {};

  GetDetails(){
      
    this.details = this.companyService.sendCompanyDetails("MisardSecond.com", "ITSecond");


    this.name = this.details.CompanyName;
    this.industry = this.details.Industry;




  }
   

}
