import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DealsService } from '../deals.service';
import { Product } from 'src/app/shared/models/product';
import { Seller } from 'src/app/shared/models/seller';
import { deals } from 'src/app/shared/models/deals';

@Component({
  selector: 'app-add-deals',
  templateUrl: './add-deals.component.html',
  styleUrls: ['./add-deals.component.css']
})
export class AddDealsComponent implements OnInit {
  
  errorMessage: string = '';
  errorMessage1: string = '';
  successMessage: string = '';
  seller: Seller
  product:Product
  productCategoryList: string[]
  @Input()
  productRecieved: Product
  productList: Product[]
  productToBeModified: Product
  displayProducts: Boolean

  productListFromSession : Product[]
  dealsProductCategoryList: string[]
  dealsProductList: deals[]                                                      
  deal: deals;

  p:Number =1;                                        
  count: Number = 10;
  
  constructor(private fb:FormBuilder,private dealsService:DealsService) { }

  
  ngOnInit() {
    this.productListFromSession = JSON.parse(sessionStorage.getItem("sellerProducts"));       //Products of a seller
    this.displayProducts = true
    this.seller = JSON.parse(sessionStorage.getItem("seller"));

    this.productList=this.productListFromSession 

    this.dealsService.getProductInDeals(this.seller.emailId)
      .subscribe((deal : deals[])=> {
        this.dealsProductList = deal
       
        //this.newMethod()
        this.errorMessage=''
      }
      , error => {
        this.errorMessage = <any>error
        this.successMessage = '';
      }
      
    )

  }

  
  

  addNewDeal(product: Product) {                            
    this.displayProducts = false 

    this.deal = new deals
    this.deal.product=product
    this.deal.sellerEmailId = this.seller.emailId
    
  
  }
 

  add() {                                                                                
    this.dealsService.addDeals(this.deal).subscribe(
      (response) => {
        this.successMessage ="Product added to deal successfully and dealId: "+ response;
        this.errorMessage = "Unable to Add"
        let newProductList: Product[] = []
        for (let product1 of this.productList) {
          if (product1.productId != this.deal.product.productId) {
            newProductList.push(product1);
        }
      }
        this.productList=newProductList
        this.displayProducts = true
       
      }, error => {
        this.errorMessage1 = <any>error
        console.log(error)
        this.successMessage = "";
        // this.displayProducts = true;
      }
    )
  }

}
