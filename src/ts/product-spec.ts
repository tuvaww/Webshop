import { burgerMenu } from "./functions/burgerMenu";
import { createProductSpec, backToProductPage } from "./functions/createProductSpecHtml";


window.onload = () => {
    burgerMenu();
    createProductSpec ();
    let arrow = document.getElementById("backArrow");
    arrow.addEventListener("click", () => {
                backToProductPage ();
            });
};


