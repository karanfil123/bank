import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './component/home/homepage/homepage.component';
import { AboutComponent } from './component/home/about/about.component';
import { LoginComponent } from './component/home/login/login.component';
import { LayoutComponent } from './component/layout/layout.component';
import { DashboardComponent } from './panels/admin/dashboard/dashboard.component';
import { DashboardComponent as CustomerDashboardComponent } from './panels/customer/dashboard/dashboard.component';
import { DashboardComponent as PersonnelDashboardComponent } from './panels/personnel/dashboard/dashboard.component';
import { CustomersComponent } from './panels/admin/customers/customers.component';
import { MyprofileComponent } from './panels/admin/myprofile/myprofile.component';
import { PersonnelsComponent } from './panels/admin/personnels/personnels.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'about', component: AboutComponent }, 
  { path: 'login', component: LoginComponent },
  {
    path: 'panel',
    component: LayoutComponent,
    children: [
      { path: 'admin/dashboard', component: DashboardComponent },
      { path: 'admin/customers', component: CustomersComponent },
      { path: 'admin/myprofile', component: MyprofileComponent },
      { path: 'admin/myprofile', component: PersonnelsComponent },
      
    ],
  },
  {
    path: 'panel',
    component: LayoutComponent,
    children: [
      { path: 'customer/dashboard', component: CustomerDashboardComponent },
      
    ],
  },
  {
    path: 'panel',
    component: LayoutComponent,
    children: [
      { path: 'personnel/dashboard', component: PersonnelDashboardComponent },
      
    ],
  },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
