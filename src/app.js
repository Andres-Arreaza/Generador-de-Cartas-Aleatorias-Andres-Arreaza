/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Creación de los arreglos.
const valor = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const iconos = ["♦", "♥", "♠", "♣"];

// Función para generar un valor random.
const generadorValorRandom = () => {
  let valorRandom = Math.floor(Math.random() * valor.length);
  return valor[valorRandom];
};

// Función para generar un icono random.
const generadorIconoRandom = () => {
  let iconosRandom = Math.floor(Math.random() * iconos.length);
  return iconosRandom;
};

//Funcion para recargar la pagina.
function recargar() {
  const button = document.getElementById("button");
  button.addEventListener("click", () => {
    location.reload();
  });
}

window.onload = function() {
  let valorCard = generadorValorRandom();
  let iconoCardIndex = generadorIconoRandom();
  let iconoCard = iconos[iconoCardIndex];

  let iconoSuperiorFinal = document.querySelector("#iconoSuperior");
  let iconoInferiorFinal = document.querySelector("#iconoInferior");
  let valorFinal = document.querySelector("#valor");

  iconoSuperiorFinal.innerHTML = iconoCard;
  iconoInferiorFinal.innerHTML = iconoCard;
  valorFinal.innerHTML = valorCard;

  // Restriccion para que si el index del icono es 0 o 1 me agrege una nueva clase.
  if (iconoCardIndex === 0 || iconoCardIndex === 1) {
    iconoSuperiorFinal.classList.add("red");
    iconoInferiorFinal.classList.add("red");
  }
  recargar();
};
