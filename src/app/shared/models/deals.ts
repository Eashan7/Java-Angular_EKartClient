import { Product } from './product';
import { Seller } from './seller';

export class deals{
    dealId: number;
    dealDiscount:number;
    dealStart:Date;
    dealEnd:Date; 
    sellerEmailId:String; 
    product:Product; 
    dealMessage:String
}