import { Component, OnInit, Input } from '@angular/core';
import { Seller } from 'src/app/shared/models/seller';
import { Product } from 'src/app/shared/models/product';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DealsService } from '../deals.service';
import { deals } from 'src/app/shared/models/deals';



@Component({
  selector: 'app-view-deals',
  templateUrl: './view-deals.component.html',
  styleUrls: ['./view-deals.component.css']
})
export class ViewDealsComponent implements OnInit {
  AddToDealsForm:FormGroup;
  displayProductList:Boolean;
  productList:deals[];
  tenList:deals[];
  seller:Seller;
  selectedProduct:deals;
  noOfProducts:number;
  pages:number;
  intArray:number[];
  intArrayLen:number;
  dealObject:deals;
  

  constructor(private fb:FormBuilder,private deals:DealsService) { }
  
  
  ngOnInit() {    
    this.seller=JSON.parse(sessionStorage.getItem("seller"));
    this.deals.getSellerDealsForToday(this.seller.emailId).subscribe(
      response=>{
        this.productList=response;
        this.noOfProducts=this.productList.length;
        this.noOfPages();
        this.pageGeter();
        this.intArrayLen=this.intArray.length;
        this.pageMaker(1);
        console.log(this.productList)
      }
    );
    this.displayProductList =true;
    // this.noOfProducts=this.productList.length;
  }
  noOfPages(){
    if(this.noOfProducts%10==0){
      this.pages=this.noOfProducts/10;
    }
    else{
      this.pages=((this.noOfProducts/10)-(this.noOfProducts%10)/10)+1;
    }
  }
  pageGeter(){
    var m:number;
    m=this.pages;
    let numberList:number[]=[]
    for(let i=0;i<m;i++){
      numberList.push(i);
    }
    this.intArray=numberList
  }
  pageMaker(n:number){
    var m:number;
    if(n=this.intArray.length){
      let newProductList:deals[]=[];
      var k:number;
      k=this.noOfProducts%10;
      for(let i=0;i<k;i++){
        m=((n*10)-10)+i
        this.dealObject=this.productList[m];
        newProductList.push(this.dealObject)
      }
      this.tenList=newProductList

    }
    else{
      let newProductList:deals[]=[];
      for(let i=0;i<k;i++){
        m=((n*10)-10)+i
        this.dealObject=this.productList[m];
        newProductList.push(this.dealObject)
      }
      this.tenList=newProductList
    }
  }
}