import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomepageComponent } from './website/homepage/homepage.component';
import { MainpageComponent } from './website/mainpage/mainpage.component';
import { ContactpageComponent } from './website/contactpage/contactpage.component';
import { ServicespageComponent } from './website/servicespage/servicespage.component';
import { AboutpageComponent } from './website/aboutpage/aboutpage.component';
import { LoginpageComponent } from './website/loginpage/loginpage.component';
import { ErrorpageComponent } from './website/errorpage/errorpage.component';
import { ProductsComponent } from './website/products/products.component';
import { ProductsampleComponent } from './website/products/productsample/productsample.component';

@NgModule({
  declarations: [ 
    AppComponent,
    DepartmentListComponent,
    EmployeeListComponent,
    HomepageComponent,
    MainpageComponent,
    ContactpageComponent,
    ServicespageComponent,
    AboutpageComponent,
    LoginpageComponent,
    ErrorpageComponent,
    ProductsComponent,
    ProductsampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
