import { Product } from './product';

export class dealdata{
    dealId: number;
    dealDiscount:number;
    sellerEmailId:String; 
    product:Product; 
    dealMessage:String;
    dealStartsAt:Date;
    dealEndsAt:Date;
}