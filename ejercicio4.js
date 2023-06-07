let totalCompra = 0;
function ingresarPrecio() {
  let precio = prompt(
    "Ingrese el precio del producto (o escriba 'total' para finalizar la compra):"
  );

  if (precio.toLowerCase() === "total") {
    alert("El total de la compra es: $" + totalCompra.toFixed(2));
  } else {
    precio = parseFloat(precio);
    if (!isNaN(precio) && precio > 0) {
      totalCompra += precio;
      ingresarPrecio();
    } else {
      alert("Por favor, ingrese un precio válido.");
      ingresarPrecio();
    }
  }
}
ingresarPrecio();
