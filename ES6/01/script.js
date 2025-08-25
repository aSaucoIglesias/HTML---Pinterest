const sum = (a = 10, b = 5) => {
    return a + b;
};

// 1.1 Sin parámetros
console.log(sum());

// 1.2 Un parámetro
console.log(sum(27));

// 1.3 Dos parámetros
console.log(sum(27, 23));