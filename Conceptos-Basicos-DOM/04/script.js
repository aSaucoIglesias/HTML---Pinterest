// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click
const btn = document.createElement("button");
btn.id = "btnToClick";
btn.textContent = "Click aquí";

document.body.appendChild(btn);

btn.addEventListener("click", (event) => {
    console.log(event); // muestra toda la info del click
    console.log("Has hecho click en:", event.target); // ejemplo extra
});

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const focusInput = document.querySelector(".focus");

focusInput.addEventListener("focus", (event) => {
    console.log("Focus en input con valor:", event.target.value);
});

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const valueInput = document.querySelector(".value");

valueInput.addEventListener("input", (event) => {
    console.log("Nuevo valor del input:", event.target.value);
});