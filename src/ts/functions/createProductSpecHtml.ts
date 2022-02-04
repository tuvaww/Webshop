import { Cart, cartList } from "../models/Cart";
import { productList } from "../models/productList";


export function createProductSpec () {
    let quantity = 0;
         for (let i = 0; i < cartList.length; i++) {
             quantity += cartList[i].quantity;     
            }
    let p = document.getElementById("floatingcartnumber");
    p.innerHTML = ""+ quantity;
    
    for (let i = 0; i < productList.length; i++) {
        if (productList[i].productSpec === true) {
            let container: HTMLElement = document.getElementById("product-spec");
            let name:HTMLHeadingElement = document.createElement("h3");
            name.innerHTML = productList[i].name;
            container.appendChild(name);

            let div: HTMLDivElement = document.createElement("div");
            div.className = "dogcontainer"
            container.appendChild(div);

            let dogproduct:HTMLDivElement = document.createElement("div");
            dogproduct.className = "dogproduct";
            div.appendChild(dogproduct);

            let dogImgContainer:HTMLDivElement = document.createElement("div");
            dogImgContainer.className = "dogimgcontainer";
            dogproduct.appendChild(dogImgContainer);

            let dogImg: HTMLImageElement = document.createElement("img");
            dogImg.src = productList[i].picture;
            dogImg.alt = productList[i].pictureAlt;
            dogImgContainer.appendChild(dogImg);

            let cartSymbolContainer: HTMLDivElement = document.createElement("div");
            cartSymbolContainer.className = "cartSymbolContainer";
            dogImgContainer.appendChild(cartSymbolContainer);

            let cartSymbol: HTMLElement = document.createElement("i");
            cartSymbol.className = "bi bi-bag-plus";
            cartSymbolContainer.appendChild(cartSymbol);

            cartSymbol.addEventListener("click", () => {
                let cart = new Cart();
                cart.addToCart(i);
                floatingCartBounce();
                });


            let info:HTMLParagraphElement = document.createElement("p");
            info.innerHTML = productList[i].info;
            dogproduct.appendChild(info);

            let age:HTMLParagraphElement = document.createElement("p");
            age.innerHTML = "Age in dog years: " + productList[i].age;
            dogproduct.appendChild(age);
            
            let humanAge:HTMLParagraphElement = document.createElement("p");
            let humanAgeCalc = productList[i].age * 7;
            humanAge.innerHTML = "Age in human years: " + humanAgeCalc;
            dogproduct.appendChild(humanAge); 
        
           let toy:HTMLParagraphElement = document.createElement("p");
            toy.innerHTML = "Favorite toy: " + productList[i].favoriteToy;
            dogproduct.appendChild(toy); 

            let candy:HTMLParagraphElement = document.createElement("p");
            candy.innerHTML = "Favorite candy: " + productList[i].favoriteCandy;
            dogproduct.appendChild(candy);

            let snores:HTMLParagraphElement = document.createElement("p");
            snores.innerHTML = "Snores: " + productList[i].snores;
            dogproduct.appendChild(snores); 

            let price:HTMLParagraphElement = document.createElement("p");
            price.innerHTML = "Price: $" + productList[i].price;
            dogproduct.appendChild(price);
        }
    }
}

function floatingCartBounce () {
  let floatingCart = document.getElementById("floatingcart");
  floatingCart.className = "bounce";
  setTimeout(stopBounce, 2000)
}
function stopBounce () {
  let floatingCart = document.getElementById("floatingcart");
  floatingCart.className = "floatingcart";
}


export function backToProductPage () {
    for (let i = 0; i < productList.length; i++) {
    if (productList[i].productSpec === true) {
        window.location.href = "product-page.html#" + productList[i].category +"target";
    }
    }
}