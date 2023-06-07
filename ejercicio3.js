function caf(temperatura) {
  return (temperatura * 9) / 5 + 32;
}
function fac(temperatura) {
  return ((temperatura - 32) * 5) / 9;
}
let temperatura = parseFloat(prompt("Ingresa la temperatura:"));
let unidad = prompt(
  "Ingresa la unidad de conversión (C para Celsius, F para Fahrenheit):"
);

let temperaturaConvertida;

if (unidad.toUpperCase() === "C") {
  temperaturaConvertida = caf(temperatura);
  console.log(
    temperatura +
      " grados Celsius equivalen a " +
      temperaturaConvertida +
      " grados Fahrenheit."
  );
} else if (unidad.toUpperCase() === "F") {
  temperaturaConvertida = fac(temperatura);
  console.log(
    temperatura +
      " grados Fahrenheit equivalen a " +
      temperaturaConvertida +
      " grados Celsius."
  );
} else {
  console.log("Unidad de conversión inválida.");
}
