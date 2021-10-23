import "../styles/style.scss";
import { interaccionCarrusel } from "./carrusel";
import { obj } from "./particle.js";
import { typed, tecnologias } from "./typed.js";

particlesJS(obj);
document.addEventListener("DOMContentLoaded", interaccionCarrusel);
const menuHamburguesa = document.querySelector(".menu-hamburguesa");
const btnCerrar = document.querySelector(".btn-cerrar");
const enlacesMenu = document.querySelector(".enlaces-menu");
// funcionalidad menu hamburguesas

const mq = matchMedia("(min-width:768px)");
mq.addEventListener("change", () => {
  const cambio = mq.matches;
  if (cambio) {
    enlacesMenu.classList.remove("active");
  }
});
menuHamburguesa.addEventListener("click", () => {
  enlacesMenu.classList.add("active");
});
btnCerrar.addEventListener("click", () => {
  enlacesMenu.classList.remove("active");
});
