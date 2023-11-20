import { Component , OnInit } from '@angular/core';
import { CompanyService } from './company.service';
import { InformationService } from './information.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 // providers: [CompanyService , InformationService]
})

export class AppComponent implements OnInit {
  title = 'Batch10ngServices';

  constructor(public informantionService : InformationService){

  }

  myLatestCompanyName = ""
  ngOnInit(): void {
       this.informantionService.eventEmitter.subscribe((data: any)=>{
               console.log(data);
               this.myLatestCompanyName = data;
       })
  }





}
