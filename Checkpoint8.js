// 1. Cree un bucle for en JS que imprima cada nombre en esta lista. miLista = “velma”, “exploradora”, “jane”, “john”, “harry”
// 2. Cree un bucle while que recorra la misma lista y también imprima los nombres. Nota: Recuerda crear un contador para que el ciclo no sea infinito.
// 3. Cree una función de flecha que devuelva "Hola mundo".

// Ejercicio 1. Bucle FOR

const miLista = ["velma", "exploradora", "jane", "john", "harry"]
for ( let i = 0; i < miLista.length; i++) {
    console.log(miLista[i])
}

// Ejercicio 2. Bucle WHILE

let count = 0
while (count < miLista.length) {
  console.log(miLista[count]);
  count++
}

// Ejercicio 3. FUNCIÓN FLECHA

const flecha = () => {
  console.log("Hola Mundo")
}
flecha()
