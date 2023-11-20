import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { SecondCompComponent } from './second-comp/second-comp.component';
import { ThirdCompComponent } from './third-comp/third-comp.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';
import { CompanyService } from './company.service';
import { InformationService } from './information.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    SecondCompComponent,
    ThirdCompComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CompanyService , InformationService],
  bootstrap: [AppComponent]
})

export class AppModule {

 }
