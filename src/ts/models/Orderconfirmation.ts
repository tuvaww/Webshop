import { Customerinfo } from "./Customerinfo";

export class Orderconfirmation {
  orderList:Customerinfo[];

  constructor() {
    this.orderList = JSON.parse(sessionStorage.getItem("orderConfirmationList")) || [];
  }

}


export let orderList = JSON.parse(sessionStorage.getItem("orderConfirmationList")) || [];
