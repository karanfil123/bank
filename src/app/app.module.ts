import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/home/navbar/navbar.component';
import { HomepageComponent } from './component/home/homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './component/home/about/about.component';
import { LoginComponent } from './component/home/login/login.component';
import { LayoutComponent } from './component/layout/layout.component';
import { SidebarComponent } from './component/layout/sidebar/sidebar.component';
import { TopbarComponent } from './component/layout/topbar/topbar.component';
import { PanelsModule } from './panels/panels.module';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Jwt } from './core/services/interceptor/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    AboutComponent,
    LoginComponent,
    LayoutComponent,
    SidebarComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelsModule,
    FormsModule,
    HttpClientModule,

    RouterModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: Jwt, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
