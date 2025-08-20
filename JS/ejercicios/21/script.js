const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
];

let minors = [];
let adults = [];
for (let i = 1; i < users.length; i++) {
    if (users[i].years < 18) {
        minors.push(users[i].name);
    } else if (users[i].years >= 18) {
        adults.push(users[i].name);
    }
}

console.log(`Usuarios menores de edad: ${minors}`);
console.log(`Usuarios mayores de edad: ${adults.join(", ")}`);
