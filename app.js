const numeroPersonas = parseInt(prompt("Ingrese el número de personas que desea registrar"));

let listaOriginal = [];

for(let i = 1; i <= numeroPersonas; i++) {
  const nombre = prompt(`Ingrese el nombre de la persona n° ${i}`);
  const edad = parseInt(prompt("Ingrese la edad de la persona"));
  const nota = parseFloat(prompt("Ingrese la nota de la persona"));

  let datosPersona = [nombre, edad, nota];

  listaOriginal.push(datosPersona)
}

const ordenarPorNotas = () => {
  console.log("Lista original: ", listaOriginal)
  const ordenadoPorNota = [...listaOriginal].sort((a, b) => b[2] - a[2]);
  console.log("Lista ordenada por nota: ", ordenadoPorNota)
}

ordenarPorNotas();