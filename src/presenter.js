import {precioxcantidad} from "./totalizador.js";

const cantidad_input = document.querySelector("#inputcantidad");
const precio_input = document.querySelector("#inputprecio");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = cantidad_input.value;
  const precio = precio_input.value;

  div.innerHTML = "<p> El precio por la cantidad es: " + precioxcantidad(cantidad, precio) + "</p>";
});
