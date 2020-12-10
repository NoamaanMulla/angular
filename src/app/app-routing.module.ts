import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './website/homepage/homepage.component';
import { MainpageComponent } from './website/mainpage/mainpage.component';
import { ContactpageComponent } from './website/contactpage/contactpage.component';
import { ServicespageComponent } from './website/servicespage/servicespage.component';
import { AboutpageComponent } from './website/aboutpage/aboutpage.component';
import { LoginpageComponent } from './website/loginpage/loginpage.component';
import { ErrorpageComponent } from './website/errorpage/errorpage.component';
import { ProductsComponent } from './website/Products/Products.component';
import { ProductsampleComponent } from './website/Products/Productsample/Productsample.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'login',
    pathMatch:'full'
      },
  {
    path: 'login',
    component: LoginpageComponent
      },
  {
    path: 'home',
    component: HomepageComponent
      },
  {
    path: 'about',
    component: AboutpageComponent
      },
  {
    path: 'contact',
    component: ContactpageComponent
      },
  {
    path: 'services',
    component: ServicespageComponent
      },
  {
    path: 'products',
    children: [
      {
        path: '',
        component: ProductsComponent
          },
      {
        path: 'productsample',
        component: ProductsampleComponent
          }
    ]
      },
  {
    path: '**',
    component: ErrorpageComponent
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
