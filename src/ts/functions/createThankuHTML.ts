import { Customerinfo } from "../models/Customerinfo";


export function createThankuHTML() {
  let order = new Customerinfo();
  order = JSON.parse(sessionStorage.getItem("orderConfirmationList")) || {};

  let orderConfirmationContainer: HTMLElement =
    document.getElementById("orderConfirmation");

  let orderinfoContainer: HTMLElement = document.createElement("main");
  orderinfoContainer.classList.add("orderInfoContainer");
  orderConfirmationContainer.appendChild(orderinfoContainer);

  let yourDogIsOnTheWay: HTMLHeadElement = document.createElement("h3");
  yourDogIsOnTheWay.classList.add("thankuHeader");
  yourDogIsOnTheWay.innerHTML = "Thank you for shopping at us!";
  orderinfoContainer.appendChild(yourDogIsOnTheWay);

  let orderNumber: HTMLElement = document.createElement("h3");
  orderNumber.classList.add("orderNumber");
  orderNumber.innerHTML = "Ordernumber: " + order.orderNr;
  orderinfoContainer.appendChild(orderNumber);

  let shippingOrderContainer: HTMLDivElement = document.createElement("div");
  shippingOrderContainer.classList.add("shippingOrderContainer");
  orderinfoContainer.appendChild(shippingOrderContainer);
  let shippingInfo: HTMLHeadElement = document.createElement("h3");
  shippingInfo.innerHTML = "SHIPPINGINFO:";
  shippingInfo.classList.add("shippingInfoOrder");
  shippingOrderContainer.appendChild(shippingInfo);

  let orderName: HTMLSpanElement = document.createElement("span");
  orderName.innerHTML = "" + order.name;
  shippingOrderContainer.appendChild(orderName);
  
  let orderMail: HTMLSpanElement = document.createElement("span");
  orderMail.innerHTML = "" + order.email;
  shippingOrderContainer.appendChild(orderMail);

  let orderAdress: HTMLSpanElement = document.createElement("span");
  orderAdress.innerHTML = "" + order.adress;
  shippingOrderContainer.appendChild(orderAdress);
  
  let orderCity: HTMLSpanElement = document.createElement("span");
  orderCity.innerHTML = "" + order.city;
  shippingOrderContainer.appendChild(orderCity);

  let containerDescription: HTMLDivElement = document.createElement("div");
  containerDescription.classList.add("containerOfDescriptions");

  let orderedProducts: HTMLElement = document.createElement("h5");
  orderedProducts.innerHTML = "PRODUCTS";
  orderedProducts.classList.add("showOrderHeader");

  containerDescription.appendChild(orderedProducts);

  let orderedQTY: HTMLElement = document.createElement("h5");
  orderedQTY.innerHTML = "QTY";
  orderedQTY.classList.add("orderedQTYHeader");

  containerDescription.appendChild(orderedQTY);

  let orderedPrice: HTMLElement = document.createElement("h5");
  orderedPrice.innerHTML = "PRICE";
  orderedPrice.classList.add("orderedPriceHeader");

  containerDescription.appendChild(orderedPrice);

  orderinfoContainer.appendChild(containerDescription);


  let orderedItems: HTMLElement = document.createElement("article");
  orderedItems.classList.add("orderedItems");
  orderinfoContainer.appendChild(orderedItems);

  let itemsDescription: HTMLElement = document.createElement("section");
  itemsDescription.classList.add("itemsDescription");
  orderedItems.appendChild(itemsDescription);

  for (let i = 0; i < order.order.length; i++) {

    let showOrderdItemsContainer: HTMLElement =
      document.createElement("section");
    showOrderdItemsContainer.classList.add("itemsThanku");

    let thankuIMG: HTMLImageElement = document.createElement("img");
    thankuIMG.classList.add("imgOrdered");
    thankuIMG.src = order.order[i].product.picture;
    thankuIMG.alt = order.order[i].product.pictureAlt;

    let QTYOrderedItem: HTMLSpanElement = document.createElement("span");
    QTYOrderedItem.classList.add("quantity");
    QTYOrderedItem.innerHTML = "" + order.order[i].quantity;

    let priceOrderedItem: HTMLSpanElement = document.createElement("span");
    priceOrderedItem.classList.add("priceOnItem");
    let sum = order.order[i].product.price * order.order[i].quantity;
    priceOrderedItem.innerHTML = "$" + sum;

    showOrderdItemsContainer.appendChild(thankuIMG);
    showOrderdItemsContainer.appendChild(QTYOrderedItem);
    showOrderdItemsContainer.appendChild(priceOrderedItem);

    itemsDescription.appendChild(showOrderdItemsContainer);
  }

  let totalPriceOfOrder: HTMLElement = document.createElement("section");
  totalPriceOfOrder.innerHTML = "Total: ";
  orderinfoContainer.appendChild(totalPriceOfOrder);

  let totalpriceItem: HTMLElement = document.createElement("h5");
  totalPriceOfOrder.appendChild(totalpriceItem);
  totalpriceItem.id = "totalPrice";

  let sum = 0;
  for (let i = 0; i < order.order.length; i++) {
      let price = order.order[i].product.price * order.order[i].quantity;
      sum += price;
    }
      totalpriceItem.innerHTML = "$" + sum;



  let continueShoppingThanku: HTMLDivElement = document.createElement("div");
  continueShoppingThanku.classList.add("backBtnContainer");
  orderinfoContainer.appendChild(continueShoppingThanku);

  let continueShoppingButtonThanku = document.createElement("a");
  continueShoppingButtonThanku.classList.add("backToShoppingButton");
  continueShoppingButtonThanku.href = "product-page.html#product-page";
  continueShoppingButtonThanku.innerHTML = "Shoppa mer";
  continueShoppingThanku.appendChild(continueShoppingButtonThanku);

  localStorage.clear();
}
