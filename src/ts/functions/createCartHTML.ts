import { Cart } from "../models/Cart";

export function createCartHTML() {
  let cart = new Cart();
  let productsCartContainer: HTMLElement = document.getElementById("cart");
  productsCartContainer.innerHTML = "";
  let cartTotal: HTMLSpanElement = document.createElement("span");
  let categoryCartContainer = document.getElementById("sumContainer");

  if (cart.cartList.length == 0) {
    let textContainer: HTMLDivElement = document.createElement("div");
    textContainer.classList.add("emptyCartContainer");

    let emptyCart: HTMLElement = document.createElement("h3");
    emptyCart.innerHTML = "Your shopping cart is empty";
    emptyCart.classList.add("emptyCart");

    textContainer.appendChild(emptyCart);
    productsCartContainer.appendChild(textContainer);
    categoryCartContainer.innerHTML = "";
  } else {
    let heading = document.createElement("h3");
    heading.innerHTML = "Your shopping cart";
    productsCartContainer.appendChild(heading);
    let dogContainer: HTMLDivElement = document.createElement("div");
    dogContainer.className = "dogcontainer";
    productsCartContainer.appendChild(dogContainer);

    for (let i = 0; i < cart.cartList.length; i++) {
      let dogProduct: HTMLDivElement = document.createElement("div");
      dogProduct.className = "dogproduct";
      dogContainer.appendChild(dogProduct);

      let dogImageCartContainer: HTMLDivElement = document.createElement("div");
      dogImageCartContainer.className = "dogimgcontainer";
      dogProduct.appendChild(dogImageCartContainer);

      let cartIMG: HTMLImageElement = document.createElement("img");
      cartIMG.src = cart.cartList[i].product.picture;
      cartIMG.alt = cart.cartList[i].product.pictureAlt;
      dogImageCartContainer.appendChild(cartIMG);

      let cartIconContainer: HTMLDivElement = document.createElement("div");
      cartIconContainer.classList.add("crossIconContainer");
      dogImageCartContainer.appendChild(cartIconContainer);

      let cartIcon: HTMLElement = document.createElement("i");
      cartIcon.className = "bi bi-x-circle";
      cartIconContainer.appendChild(cartIcon);

      let dogCartName: HTMLElement = document.createElement("h5");
      dogCartName.innerHTML = cart.cartList[i].product.name;
      dogProduct.appendChild(dogCartName);

      let cartDogPrice: HTMLElement = document.createElement("p");
      cartDogPrice.className = "dogprice";
      cartDogPrice.innerHTML = "$" + cart.cartList[i].product.price.toString();
      dogProduct.appendChild(cartDogPrice);

      let totalOfDogs: HTMLSpanElement = document.createElement("p");
      totalOfDogs.classList.add("cartTotalDogs");
      totalOfDogs.innerHTML = "Quantity: ";
      dogProduct.appendChild(totalOfDogs);

      let dogsShowTotal: HTMLSpanElement = document.createElement("p");
      dogsShowTotal.id = "totalOfDogs";
      let quantity: number = cart.cartList[i].quantity;
      dogsShowTotal.innerHTML = "" + quantity;

      totalOfDogs.appendChild(dogsShowTotal);

      let removeADogButton: HTMLElement = document.createElement("i");
      removeADogButton.className = "bi bi-dash-circle hover";
      totalOfDogs.appendChild(removeADogButton);

      let addADogButton: HTMLElement = document.createElement("i");
      addADogButton.className = "bi bi-plus-circle hover";
      totalOfDogs.appendChild(addADogButton);

      addADogButton.addEventListener("click", () => {
        cart.plusDogs(i);
      });

      removeADogButton.addEventListener("click", () => {
        cart.minusDogs(i);
      });

      cartIcon.addEventListener("click", () => {
        cart.removeFromCart(i);
      });

      for (let j = 0; j < cart.cartList.length; j++) {
        if (
          i != j &&
          cart.cartList[i].product.name === cart.cartList[j].product.name
        ) {
          cart.cartList.splice(j, 1);
          cart.cartList[i].quantity++;
          let listastext = JSON.stringify(cart.cartList);
          localStorage.setItem("savedCartList", listastext);
          createCartHTML();
        }
      }
    }
    let totalSum: HTMLSpanElement = document.createElement("span");
    categoryCartContainer.innerHTML = "";

    cartTotal.innerHTML = "Total: ";
    categoryCartContainer.appendChild(cartTotal);

    cartTotal.classList.add("cartTotal");

    totalSum.id = "cartTotal";
    totalSum.classList.add("addSum");

    cartTotal.appendChild(totalSum);

    let doneCartButton: HTMLAnchorElement = document.createElement("a");
    doneCartButton.classList.add("checkoutBtn");
    doneCartButton.href = "checkout.html";
    doneCartButton.innerHTML = "CHECKOUT";

    categoryCartContainer.appendChild(doneCartButton);

    cart.showTotal();
  }
}
