//EJERCICIOS DE OBJETOS
let producto = {
  nombre: "Titas",
  precio: 250,
  cantidad: 10,
};
function calcularTotal(objeto) {
  let monto = objeto.precio * objeto.cantidad;
  return monto;
}
//2da funcion
let persona = {
  nombre: "Tomas",
  edad: 21,
  profesion: "Desarrollador web",
};
function presentarPersona(persona) {
  console.log(
    "Ella se llama " +
      persona.nombre +
      " tiene " +
      persona.edad +
      " años de edad y su profesión es " +
      persona.profesion
  );
}
//3ra funcion
function esMayorDeEdad(obj) {
  let valor = Boolean();
  if (18 <= obj.edad) {
    valor = true;
  } else {
    valor = false;
  }
  return valor;
}
