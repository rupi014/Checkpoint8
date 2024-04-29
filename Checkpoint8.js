const miLista = ["velma", "exploradora", "jane", "john", "harry"]

// Ejercicio 1. Bucle FOR

for ( let i = 0; i < miLista.length; i++) {
    console.log(miLista[i])
}

// Ejercicio 2. Bucle WHILE

let count = 0
while (count < miLista.length) {
  console.log(miLista[count]);
  count++
}

// Ejercicio 3. FUNCIÓN FECHA

const flecha = () => {
  console.log("Hola Mundo")
}
flecha()