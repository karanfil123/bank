import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerTransactionComponent } from './customer-transaction/customer-transaction.component';



@NgModule({
  declarations: [
    DashboardComponent,
    MyprofileComponent,
    CustomersComponent,
    CustomerTransactionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PersonnelModule { }
