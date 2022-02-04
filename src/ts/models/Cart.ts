import { createCartHTML } from "../functions/createCartHtml";
import { Cartquantity } from "./Cartquantity";
import { productList } from "./productList";

export class Cart {
  cartList: Cartquantity[];

  constructor() {
    this.cartList = JSON.parse(localStorage.getItem("savedCartList")) || [];
  }

  addToCart(i: number) {
    let newCart = productList[i];
    let cart1 = new Cartquantity(newCart, 1);
    this.cartList.push(cart1);

    let quantity = 0;
    for (let i = 0; i < this.cartList.length; i++) {
      quantity += this.cartList[i].quantity;
    }
    let p = document.getElementById("floatingcartnumber");
    p.innerHTML = "" + quantity;
    let listastext = JSON.stringify(this.cartList);
    localStorage.setItem("savedCartList", listastext);
  }

  removeFromCart(i: number) {
    this.cartList.splice(i, 1);
    let listastext = JSON.stringify(this.cartList);
    localStorage.setItem("savedCartList", listastext);
    createCartHTML();
  }

  plusDogs(i: number) {
    this.cartList[i].quantity++;
    let listastext = JSON.stringify(this.cartList);
    localStorage.setItem("savedCartList", listastext);
    createCartHTML();
  }

  minusDogs(i: number) {
    this.cartList[i].quantity--;
    let listastext = JSON.stringify(this.cartList);
    localStorage.setItem("savedCartList", listastext);
    createCartHTML();
    if (this.cartList[i].quantity < 1) {
      this.removeFromCart(i);
      let listastext = JSON.stringify(this.cartList);
      localStorage.setItem("savedCartList", listastext);
      createCartHTML();
    }
  }

  showTotal() {
    let sum = 0;
    for (let i = 0; i < this.cartList.length; i++) {
      let price = this.cartList[i].product.price * this.cartList[i].quantity;
      sum += price;
    }
    let totalSum = document.getElementsByClassName("addSum");
    for (let i = 0; i < totalSum.length; i++) {
      totalSum[i].innerHTML = "$" + sum;
    }
  }
}

export let cartList = JSON.parse(localStorage.getItem("savedCartList")) || [];
