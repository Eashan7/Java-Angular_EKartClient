import { Injectable } from '@angular/core';

import { deals } from 'src/app/shared/models/deals';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DealsService {

  
//for getting products
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  // getTodayDeal(sellerEmailId:String):Observable<deals[]>{
  //   const url = environment.SellerDealsForTodayAPI + "/sellerDealsForToday/"+sellerEmailId+"/0";
  //   return this.http.get<deals[]>(url)

  // }

//for getting product in deals
getProductInDeals(emailId): Observable<any> {
  //const url = environment.SellerDealsForTodayAPI + "/getProductsinDeals";
  const url="http://localhost:3333/EKart_Server/DealsForTodayAPI-api/addProductToDeals"
  return this.http.post<deals[]>(url,emailId,{ headers: this.headers })
    .pipe(catchError(this.handleError));

}
// getSellerDealsForToday(sellerEmailId):Observable<deals[]>{
//     const url = environment.SellerDealsForTodayAPI + "/sellerDealsForToday/"+sellerEmailId+"/";
//     return this.http.get<deals[]>(url)
// }
getSellerDealsForToday(sellerEmailId):Observable<deals[]>{
  const url = "http://localhost:3333/EKart_Server/DealsForTodayAPI-api/viewProductToDeals/jack@infosys.com/";
  return this.http.get<deals[]>(url)
}
addDeals(deal:deals):any{
  //const url = environment.SellerDealsForTodayAPI + "/addNewDeal";
  const url="http://localhost:3333/EKart_Server/DealsForTodayAPI-api/addProductToDeals"
  return this.http.post<deals[]>(url, JSON.stringify(deal), { headers: this.headers })
    .pipe(catchError(this.handleError));

}

getDeals(): Observable<any>{
  const url="http://localhost:3333/EKart_Server/CustomerDealsForTodayAPI/viewAllDealsForCustomer";
  return this.http.get(url);
}

    
  private handleError(err: HttpErrorResponse) {
    console.log(err)
    let errMsg: string = '';
    if (err.error instanceof Error) {
      errMsg = err.error.message;
      console.log(errMsg)
    }
    else if (typeof err.error === 'string') {
      errMsg = JSON.parse(err.error).message
    }
    else {
      if (err.status == 0) {
        errMsg = "A connection to back end can not be established.";
      } else {
        errMsg = err.error.message;
      }
    }
    return throwError(errMsg);
  }
}
