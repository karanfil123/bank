import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonnelsComponent } from './personnels/personnels.component';
import { CustomersComponent } from './customers/customers.component';
import { MyprofileComponent } from './myprofile/myprofile.component';



@NgModule({
  declarations: [
    DashboardComponent,
    PersonnelsComponent,
    CustomersComponent,
    MyprofileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
