// 1.1 Inserta dinamicamente en un html un div vacio con javascript.
const newDiv = document.createElement("div");
newDiv.className = "tu-nuevo-div-vacio"
document.body.appendChild(newDiv);

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const newDivWithParagrph = document.createElement("div");
const paragraphInDiv = document.createElement("p");
paragraphInDiv.textContent = "Contenido del párrafo recién creado";
paragraphInDiv.className = "tu-nuevo-parrafo";

newDivWithParagrph.appendChild(paragraphInDiv);
document.body.appendChild(newDivWithParagrph);


// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
// loop con javascript.

// 1.4 Inserta dinamicamente con javascript en un html una p con el 
// 	texto 'Soy dinámico!'.
const newDivWithSixParagraphs = document.createElement("div");
newDivWithSixParagraphs.className = "capa con seis parrafos";
for(let i = 1; i <= 6; i++ ){
    const paragraphInDiv = document.createElement("p");
    if(i === 1){
        paragraphInDiv.textContent = "Soy dinámico!"
    } else {
        paragraphInDiv.textContent = "Nosortros también y además estamos en la posición " + i;
    }
    newDivWithSixParagraphs.appendChild(paragraphInDiv);
}
document.body.appendChild(newDivWithSixParagraphs);

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2Newtext = document.querySelector("h2.fn-insert-here");
h2Newtext.textContent = "Wubba Lubba dub dub";

// 1.6 Basandote en el siguiente array crea una lista ul > li con 
// los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const unordererList = document.createElement("ul");
for (const app of apps) {
    const listElement = document.createElement("li");
    listElement.textContent = app;
    unordererList.appendChild(listElement);
}
document.body.appendChild(unordererList);


// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const removableNodes = document.querySelectorAll(".fn-remove-me");
removableNodes.forEach(removableNode => removableNode.remove());


// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// Recuerda que no solo puedes insertar elementos con .appendChild.
const firstDiv = document.querySelectorAll("div")[0];
const newParagraph = document.createElement("p");
newParagraph.textContent = "Voy en medio!";
firstDiv.after(newParagraph);


// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
// .fn-insert-here
const paragraphVoyDentro = document.querySelectorAll(".fn-insert-here");
for(let i = 0; i < paragraphVoyDentro.length; i++){
    if(paragraphVoyDentro[i].tagName !== "H2"){
        paragraphVoyDentro[i].textContent = "Voy dentro!";
    }
}