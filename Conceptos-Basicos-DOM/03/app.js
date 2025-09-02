// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const unordererList = document.createElement("ul");
for (const country of countries) {
    const singleCountry = document.createElement("li");
    singleCountry.textContent = country;
    unordererList.appendChild(singleCountry)
}

document.body.appendChild(unordererList);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const removableElement = document.querySelector(".fn-remove-me");
removableElement.remove();

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const carsListContainer = document.querySelector('[data-function="printHere"]');
const carsList = document.createElement("ul")
for (const car of cars) {
    const singleCar = document.createElement("li");
    singleCar.textContent = car;
    carsList.appendChild(singleCar)
}

carsListContainer.appendChild(carsList)

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
const countriesObject = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (const country of countriesObject) {
    const container = document.createElement("div");
    const newH4 = document.createElement("h4");
    newH4.textContent = country.title;

    const newImg = document.createElement("img");
    newImg.src = country.imgUrl;
    newImg.alt = country.title;

    const newButton = document.createElement("button");
    newButton.classList.add("borro-single-div")
    newButton.textContent = "borra este div";

    const br = document.createElement("br");

    container.appendChild(newH4);
    container.appendChild(newImg);
    container.appendChild(br);
    container.appendChild(newButton);
    document.body.appendChild(container);
}

let deleteableButtons = document.querySelectorAll(".borro-single-div");

deleteableButtons.forEach(button =>{
    button.addEventListener("click", () => {
        button.parentElement.remove();

    })
});


deleteableButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Borra el div contenedor del botón
        button.parentElement.remove();
    });
});

addEventListener.addEventListener

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la serie de divs.
const delButton = document.createElement("button");
delButton.textContent = "Eliminar contenido";
document.body.appendChild(delButton);

delButton.addEventListener("click", () => {
    const allDivs = document.querySelectorAll("body > div:not(div[data-function='printHere'])");

    if (allDivs.length > 0) {
        const lastDiv = allDivs[allDivs.length - 1];
        lastDiv.remove(); // eliminamos el último div
    } else {
        alert("No hay más elementos para eliminar");
    }

})


// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// divs que elimine ese mismo elemento del html.
// Lo hago en el ejercicio 1.4

