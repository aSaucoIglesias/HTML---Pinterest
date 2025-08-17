// Ejercicio 4.1
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log(avengers[0]);

// Ejercicio 4.2
avengers[0] = "IRONMAN";

console.log(avengers);

// Ejercicio 4.3
console.log(avengers.length)

// Ejercicio 4.4
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

rickAndMortyCharacters.push("Morty", "Summer");

// Ejercicio 4.5
const rickAndMortyNewCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyNewCharacters.pop();

console.log("Primero: " + rickAndMortyNewCharacters[0]); // Rick
console.log("Último: " + rickAndMortyNewCharacters[rickAndMortyNewCharacters.length - 1]); // Beth

// Ejercicio 4.6
rickAndMortyNewCharacters.splice(1, 1);

console.log(rickAndMortyNewCharacters); // ["Rick", "Jerry", "Morty", "Summer"]
