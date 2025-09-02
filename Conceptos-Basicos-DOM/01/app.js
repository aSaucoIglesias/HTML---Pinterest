// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
let showMeButton = document.querySelector('.showme');
console.log(showMeButton)

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
let headerPrincipal = document.querySelector("#pillado");
console.log(headerPrincipal);

// 1.3 Usa querySelector para mostrar por consola todos los p
let paragraphs = document.querySelectorAll("p")
const allParagraphs = () => {
    paragraphs.forEach(p => console.log(p));
};

allParagraphs();

// 1.4 Usa querySelector para mostrar por consola todos los elementos con 
// la clase.pokemon
let pokemons = document.querySelectorAll(".pokemon");
const allPokemons = () => {
    pokemons.forEach(pokemon => console.log(pokemon))
}

allPokemons();

for(i = 0; i < pokemons.length; i++){
    console.log(pokemons[i])
}

for (const pokemon of pokemons) {
    console.log(pokemon)
}


// 1.5 Usa querySelector para mostrar por consola todos los elementos con 
// el atributo data-function="testMe".
let testMeElements = document.querySelectorAll('[data-function="testMe"]')
const allTestMeElements = () => {
    testMeElements.forEach( testMeElement => console.log(testMeElement))
}

allTestMeElements();

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe".
console.log(testMeElements[2]);