import {
  completeOrder,
  openForm,
  hideForm,
} from "./functions/checkoutFunction";
import { burgerMenu } from "./functions/burgerMenu";
import { createCartHTML } from "./functions/createCartHtml";

window.onload = () => {
  hideForm();
  openForm();
  createCartHTML();
  burgerMenu();

  let submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", completeOrder);

};
