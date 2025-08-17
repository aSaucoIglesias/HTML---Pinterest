let email = "email@email.com";

console.log(email.includes("@")); // true


let seIncluye = false;

for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
        seIncluye = true;
        break;
    }
}

console.log(seIncluye); // true

// Valor absoluto
console.log(Math.abs(-10));

// Redondea hacia arriba al entero más cercano
console.log(Math.ceil(4.3));

// Trunca hacia abajo al entero más cercano
console.log(Math.floor(4.7));

// Retorna el número más grande de una lista de argumentos
console.log(Math.max(5, 2, 8, 1, 4));

// Retorna el número más pequeño de una lista de argumentos
Math.min(5, 2, 8, 1, 4);

// Eleva un número a una potencia especificada
console.log(Math.pow(2, 3));

// Retorna un número aleatorio entre 0 y 1
Math.random();

// Redondea al entero más cercano
Math.round(4.7);

// Retorna el signo de un número
Math.sign(-3);

// Retorna la raíz cuadrada de un número
Math.sqrt(16);

// Retorna el seno de un ángulo en radianes
Math.sin(Math.PI / 2);

// Retorna el coseno de un ángulo en radianes
Math.cos(Math.PI);

// Retorna la tangente de un ángulo en radianes
Math.tan(Math.PI / 4);

// Retorna el arco seno de un número en radianes
Math.asin(0.5);

// Retorna el arco coseno de un número en radianes
Math.acos(0.5);

// Retorna el arco tangente de un número en radianes
Math.atan(1);

// Retorna el logaritmo natural (base e) de un número
Math.log(1);

// Retorna e elevado a la potencia de un número
Math.exp(1);

// Valor de Pi (π)
Math.PI;

// Valor de la base del logaritmo natural (e)
Math.E;

const alumns = [
    {
        name: "Paula",
        approved: true
    },
    {
        name: "Alejandro",
        approved: false
    },
    {
        name: "David",
        approved: true
    },
    {
        name: "Rocío",
        approved: true
    }
];

let allApproved = true;
for(let i=0; i<alumns.length; i++) {
    if(!alumns[i].approved) {
        allApproved = false;
        break;
    }
}

console.log(allApproved);

console.log('Tipos de datos complejos (object y "array")')
let variable1 = [1, 2];

let variable2 = variable1; // adquiere la REFERENCIA EN MEMORIA de la variable1

console.log(variable1 === variable2); // true

console.log('--------------')
console.log('Arrays y bucles')
const arrayStrings = ["elemento1", "elemento2", "elemento3"];
// posiciones       0            1            2

for (let i = 0; i < arrayStrings.length; i++) {
    
    console.log(arrayStrings[i]); // elemento1   elemento2   elemento3
    
}

console.log('--------------')
console.log('Métodos de arrays')
let array = [1, 2, 3, 4, 5];

//1. push(): Añade uno o más elementos al final del array y devuelve la nueva longitud del array.
console.log(array.push(12, 89, 456 + "cuatro", "cinco", 3)); 

// 2. pop(): Elimina el último elemento de un array y lo devuelve.
let ultimoElemento = array.pop();
console.log(ultimoElemento); // 5

// 3. shift(): Elimina el primer elemento de un array y lo devuelve.
let primerElemento = array.shift();

// 4. unshift(): Añade uno o más elementos al inicio de un array y devuelve la nueva longitud del array.
array.unshift(0);

// 5. slice(): Devuelve una copia de una parte del array dentro de un nuevo array.
let subArray = array.slice(2, 4);

// 6. splice(): Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
array.splice(2, 1, 'a', 'b', 'c');

// 7. concat(): Retorna un nuevo array que resulta de la concatenación de dos o más arrays.
let array2 = ['x', 'y', 'z'];
let newArray = array.concat(array2);

// 8. indexOf(): Devuelve el primer índice en el que se puede encontrar un elemento dado en el array, o -1 si no está presente.
let indice = array.indexOf(3);

// 9. forEach(): Ejecuta una función dada una vez por cada elemento del array.
console.log("Recorriendo el array con forEach:");
array.forEach((elemento) => {
  console.log(elemento);
});

// 10. map(): Crea un nuevo array con los resultados de llamar a una función dada en cada elemento del array.
let nuevoArray = array.map((elemento) => elemento * 2);

// 11. filter(): Crea un nuevo array con todos los elementos que cumplan una condición dada.
let arrayFiltrado = array.filter((elemento) => elemento > 3);

// 12. reduce(): Aplica una función a un acumulador y a cada elemento (de izquierda a derecha) para reducirlo a un solo valor.
let suma = array.reduce((acumulador, elemento) => acumulador + elemento, 0);

// 13. find(): Devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
let encontrado = array.find((elemento) => elemento > 3);

// 14. sort(): Ordena los elementos de un array localmente y devuelve el array ordenado.
array.sort();

// 15. reverse(): Invierte el orden de los elementos de un array in-place.
array.reverse();
