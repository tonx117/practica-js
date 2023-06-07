//EJERCICIOS DE FUNCIONES
function esMayorEdad(valor) {
  let esMayor = Boolean();
  if (valor < 18) {
    esMayor = false;
  } else {
    esMayor = true;
  }
  return esMayor;
}
//2da funcion
function calcularAreaRectangulo(base, altura) {
  let area = base * altura;
  return area;
}
//3ra funcion
function esPalindromo(cad) {
  let nuevaCadena = "";
  for (let i = cad.length - 1; i >= 0; i--) {
    nuevaCadena += cad[i];
  }
  if (cad == nuevaCadena) {
    return true;
  } else {
    return false;
  }
}
//4ta funcion
function generarNumeroAleatorio() {
  variable = parseInt(Math.random() * 10);
  return variable;
}
