import "../styles/style.scss";
// import "../img/foto_yo.jpg";

const arreglo = [1, 2, 3, 4, 5, 6];
const arreglo2 = [7, 8, 9, 10];
let arregloNuevo = [...arreglo, ...arreglo2];

console.log(arregloNuevo);
const miFuncion = (...arr) => arr.map((obj) => obj * 2);
let resultado = miFuncion(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(resultado);
