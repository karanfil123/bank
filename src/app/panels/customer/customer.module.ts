import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfilePerseonelComponent } from './profile-perseonel/profile-perseonel.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { AccountComponent } from './account/account.component';
import { MytransactionComponent } from './mytransaction/mytransaction.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProfilePerseonelComponent,
    MyprofileComponent,
    AccountComponent,
    MytransactionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { }
