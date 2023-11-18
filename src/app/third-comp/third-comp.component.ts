import { Component } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-third-comp',
  templateUrl: './third-comp.component.html',
  styleUrls: ['./third-comp.component.css'],
  providers : [CompanyService]
})
export class ThirdCompComponent {


  industry : string;
  name : string ;

  constructor(public  companyService  : CompanyService){
    this.industry = companyService.Industry;
    this.name     = companyService.CompanyName;

      
  }

  
   
  details:any = {};

  GetDetails(){
      
    this.details = this.companyService.sendCompanyDetails("MisardThird.com", "ITThird");


    this.name = this.details.CompanyName;
    this.industry = this.details.Industry;




  }

}
