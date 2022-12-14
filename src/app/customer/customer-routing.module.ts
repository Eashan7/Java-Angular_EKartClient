import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EKartRoutingGuard } from '../app.routing-guard';
import { CustomerDetailsComponent } from './customer-home/customer-details/customer-details.component';
import { ViewAllProductsComponent } from './customer-home/view-all-products/view-all-products.component';
import { CustomerCartComponent } from './customer-home/customer-cart/customer-cart.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerLandingPageComponent } from './customer-landing-page/customer-landing-page.component';
import { LoginComponent } from './customer-landing-page/login/login.component';
import { RegistrationComponent } from './customer-landing-page/registration/registration.component';
import { CustomerDealsComponent } from './customer-home/customer-deals/customer-deals.component';
import { CustomerDataComponent } from './customer-home/customer-deals/customer-data/customer-data.component';


const routes: Routes = [
  { path: 'applicationHome', component: CustomerLandingPageComponent, children: [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegistrationComponent}
  ] },
  { path: 'home', component: CustomerHomeComponent, canActivate: [EKartRoutingGuard], children: [
      {path: '', redirectTo: 'products', pathMatch: 'full'},
      { path: 'details', component: CustomerDetailsComponent },
      { path: 'products', component: ViewAllProductsComponent },
      { path: 'cart', component: CustomerCartComponent },
      {path: 'deals', component:CustomerDealsComponent},
      {path:'cards',component:CustomerDataComponent}
  ]},
  { path: '', redirectTo: '/applicationHome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }