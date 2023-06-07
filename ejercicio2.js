function esPrimo(numero) {
  if (numero < 2) {
    return false;
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

const numero = parseInt(prompt("Ingresa un número:"));

if (esPrimo(numero)) {
  console.log(numero + " es un número primo.");
} else {
  console.log(numero + " no es un número primo.");
}
