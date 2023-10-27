import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { CustomerModule } from './customer/customer.module';
import { PersonnelModule } from './personnel/personnel.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminModule,
    CustomerModule,
    PersonnelModule
  ]
})
export class PanelsModule { }
