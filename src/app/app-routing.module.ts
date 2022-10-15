import {NgModule} from '@angular/core';
import {RouterModule , Routes} from '@angular/router';
import { AuthorisationErrorComponent } from './shared/authorisation-error/authorisation-error.component';
//import { AddDealsComponent } from './seller/seller-home/products/dealsforSeller/add-deals/add-deals.component';
import { AddDealsComponent } from './seller/seller-home/products/deals/add-deals/add-deals.component';
//import { SellerAddDealsComponent } from './seller/seller-home/products/seller-add-deals/seller-add-deals.component';

const routes:Routes=[
    {path:'error',component:AuthorisationErrorComponent},
    {path:'',redirectTo:'/applicationHome/login',pathMatch:'full'},
    // {path:'addDeals',component:SellerAddDealsComponent},
    //{path:'dealsForToday',component:SellerDealsForTodayComponent},
    {path:'addDeal',component:AddDealsComponent}
]

@NgModule(
    {
        declarations:[],
        imports:[
            RouterModule.forRoot(routes)
        ],
        exports:[RouterModule]
    }
)
export class AppRoutingModule{

}