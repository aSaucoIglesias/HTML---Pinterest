// Ejercicio 7
// Completa la función que tomando dos números como argumento devuelva el más alto.
function getMaxNumber(numberOne , numberTwo) {
    if (numberOne > numberTwo) {
        return numberOne;
    } else {
        return numberTwo;
    }
}

function getMaxNumberOptim(numberOne , numberTwo) {
    return Math.max(numberOne, numberTwo);
}

