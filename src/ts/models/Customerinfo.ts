import { Cartquantity } from "./Cartquantity";

export class Customerinfo {
  name: string;
  email: string;
  adress: string;
  city: string;
 
  cardName:string;
  cardNumber: number;
  expDate: number;
  cvv: number;
  orderNr: number;
  order: Cartquantity[];

  constructor() {
    this.order = JSON.parse(localStorage.getItem("savedCartList")) || [];
  }
}

export let completeOrderList =
  JSON.parse(sessionStorage.getItem("CompleteOrderList")) || [];
