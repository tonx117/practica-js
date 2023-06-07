//EJERCICIOS DE ARREGLOS
function obtenerSuma(arreglo) {
  let suma = 0;
  for (i = 0; i < arreglo.length; i++) {
    suma = suma + arreglo[i];
  }
  return suma;
}
//2da funcion
function obtenerPares(vector) {
  let resultado = [];
  for (i = 0; i < vector.length; i++) {
    if (vector[i] % 2 == 0) {
      resultado.push(vector[i]);
    }
  }
  return resultado;
}
//3ra funcion
function obtenerPromedioPonderado(notas, pesos) {
  let anp = 0;
  for (i = 0; i < notas.length; i++) {
    anp = anp + notas[i] * pesos[i];
  }
  return anp;
}
//4ta funcion
function obtenerMaximo(arreglo) {
  let max = 0;
  for (i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > max) {
      max = arreglo[i];
    }
  }
  return max;
}
