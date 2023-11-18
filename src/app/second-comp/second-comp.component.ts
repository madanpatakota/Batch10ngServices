import { Component } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.css']
})


export class SecondCompComponent {


  industry : string;
  name : string ;

  constructor(){
    this.industry = new CompanyService().Industry;
    this.name     = new CompanyService().CompanyName;

      
  }

   

}
