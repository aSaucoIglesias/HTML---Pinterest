// Ejercicio 2.1: Variables y Tipos de Datos
const character = {
    name: 'Jack Sparrow', 
    age: 10
};

character.age = 25;

console.log(character);

// Ejercicio 2.2: Operadores y Estructuras de Control
firstName = 'Jon'; 
lastName = 'Snow'; 
age = 24; 

console.log(`Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`);

// Ejercicio 2.3: Estructuras de Control
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

console.log(`La suma del precio de los juguetes es: ${toy1.price + toy2.price}`);

// Ejercicio 2.4: Funciones
let globalBasePrice = 10000;
const car1 = {
    name: 'BMW m&m', 
    basePrice: 50000,
    finalPrice: 60000
};
const car2 = {
    name: 'Chevrolet Corbina', 
    basePrice: 70000, 
    finalPrice: 80000
};

globalBasePrice = 25000;

const calculateFinalPrice = (car) => {
    return car.basePrice + globalBasePrice;
}

console.log(`El precio final del coche ${car1.name} es: ${calculateFinalPrice(car1)}`);
console.log(`El precio final del coche ${car2.name} es: ${calculateFinalPrice(car2)}`);