import { Component, OnInit } from '@angular/core';
//import { CustomerSharedService } from "./customer-shared-service";
import { CustomerSharedService } from '../customer-shared-service';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
//import { environment } from "../../../environments/environment";
//import { Cart } from "../../shared/models/cart";
import { catchError } from 'rxjs/operators';
import { deals } from 'src/app/shared/models/deals';
import { Product } from 'src/app/shared/models/product';
import { dealdata } from 'src/app/shared/models/dealdata';
import{Customer} from 'src/app/shared/models/customer'
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-customer-deals',
  templateUrl: './customer-deals.component.html',
  styleUrls: ['./customer-deals.component.css']
})

export class CustomerDealsComponent implements OnInit {
  dealsProductList: deals[] =[] 
  deal: deals;
  data:any[]
  errorMessage: string;
  successMessage: string;
  viewDetails: boolean = false;
  selectedProduct: Product;
  constructor(private deals:CustomerSharedService,
  private router: Router,
  private route: ActivatedRoute) { 
       
    
      
    
  }

  ngOnInit(): void {
    this.deals.getDeals().subscribe(
      data=>{console.warn(data)
        this.data=data;
      
    }
    , error => {
      this.errorMessage = <any>error
      this.successMessage = "";})
  }
  label(data:dealdata):string{
    let curDateTime:Date=new Date();
  
    let endHour =data.dealEndsAt[3];
    let endMin = data.dealEndsAt[4];
    let endDate = data.dealEndsAt[2];
    let endMonth = data.dealEndsAt[1];
    let endYear = data.dealEndsAt[0];
    let startHour =data.dealStartsAt[3];
    let startMin = data.dealStartsAt[4];
    let startDate = data.dealStartsAt[2];
    let startMonth = data.dealStartsAt[1];
    let startYear = data.dealStartsAt[0];

    let curHour = curDateTime.getHours();
    let curMin = curDateTime.getMinutes();

    let curDate1 = curDateTime.getDate();
    let curMonth = curDateTime.getMonth();
    let curYear = curDateTime.getFullYear();  
    if(endYear>=curYear && endMonth>=curMonth && endDate==curDate1 && startDate==curDate1 && endHour>curHour && curHour>startHour ){
         return "Deal is On"
    }
    else if(endYear>=curYear && endMonth>=curMonth && endDate>curDate1){
      return "Deal Yet to Start"
    }
    else if(endYear<=curYear && endMonth<=curMonth && endDate<=curDate1){
      return "Deal ended"
    }
    // console.warn("Month is "+curMonth)
    // console.warn("Date is"+curDate1)
    // console.warn("Hour is"+curHour)
  }
  getDate(value:any):Date{
    let data:string=value +"";
    let dates: string[]=data.split(",");
    let date=new Date(
      parseInt(dates[0]),
      parseInt(dates[1]) -1,
      parseInt(dates[2]),
      parseInt(dates[3]),
      parseInt(dates[4]),
      0
    );
    return date
  }
  setSelectedProduct(product: Product) {
    this.viewDetails = true;
    this.selectedProduct = product;
  }
}
