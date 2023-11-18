import { Component } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent {


   company:string;
   industry : string;
  //it will automatically load FirstCompComponent is registed in the appmodule . part of the class
   constructor(){
     
     // how to create the instance this companyservice...

     // how to create the instance the class...
     
     this.company = new CompanyService().CompanyName;
     this.industry = new CompanyService().Industry;
     
   }


}
