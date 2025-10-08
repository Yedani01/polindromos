import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Main from '../public/css/main.css';
// import Swal from 'sweetalert2';

const input = document.getElementById('datos');
const boton = document.getElementById('generar');

const verificarfrase = (texto) => texto
    .toLowerCase() //toLowerCase sirve para los caracteres de este String en minúsculas
    .normalize("NFD") //El normalize()Método de StringLos valores devuelven la Normalización de Unicode Forma de esta cuerda y NFD Descomposición canónica
    .replace(/[\u0300-\u036f]/g, "")  // elimina acentos
    .replace(/[^a-z0-9]/g, "");       // elimina espacios y símbolos

const espalidromo = (frase) => {
  const caracteres = [...frase];
  for (let i = 0; i < caracteres.length / 2; i++) { //.length devuelve la cantidad de caracteres que contiene
    if (caracteres[i] !== caracteres[caracteres.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

boton.addEventListener('click', () => {
  const fraseOriginal = input.value.trim();

  if (!fraseOriginal) {
    Swal.fire({
      title: "Campo vacío",
      text: "Por favor, ingresa una palabra o frase.",
      icon: "warning"
    });
    return;
  }

  const fraseLimpia = verificarfrase(fraseOriginal);
  const resultado = espalidromo(fraseLimpia);

  if (resultado) {
    Swal.fire({
      title: "Es un palíndromo",
      text: `Se lee igual al revés.`,
      icon: "success"
    });
  } else {
    Swal.fire({
      title: "No es un palíndromo",
      text: `No es un palíndromo. Intenta de nuevo.`,
      icon: "error"
    });
  }
});