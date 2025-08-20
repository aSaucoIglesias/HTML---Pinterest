const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
];

let peliculaPequena = [];
let peliculaMediana = [];
let peliculaLarga = [];

for (let i = 1; i < movies.length; i++) {
    if (movies[i].durationInMinutes < 100) {
        peliculaPequena.push(movies[i]);
    } else if (movies[i].durationInMinutes >= 100 && movies[i].durationInMinutes <= 200) {
        peliculaMediana.push(movies[i]);
    } else {
        peliculaLarga.push(movies[i]);
    }
}

console.log("Películas pequeñas:", peliculaPequena);
console.log("Películas medianas:", peliculaMediana);
console.log("Películas largas:", peliculaLarga);