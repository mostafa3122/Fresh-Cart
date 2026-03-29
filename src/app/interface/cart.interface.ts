import { Iproduct } from "./productInterface";

export interface ICartProduct {
  _id: string;
  title: string;
  imageCover?: string;
  price: number;
  quantity: number;
  product: Iproduct;
  count:number
  
}
