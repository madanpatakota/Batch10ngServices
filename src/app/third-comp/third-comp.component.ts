import { Component } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-third-comp',
  templateUrl: './third-comp.component.html',
  styleUrls: ['./third-comp.component.css']
})
export class ThirdCompComponent {


  industry : string;
  name : string ;

  constructor(){
    this.industry = new CompanyService().Industry;
    this.name     = new CompanyService().CompanyName;

      
  }

}
