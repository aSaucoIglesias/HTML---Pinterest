import React from "react";


// 1. Mi componente se define en una función
const myComponent = () => {

    // 2. Memoria de datos
    const [value, setValue] = React.useState('Antxon');

    // 3. Mi componente retorna un elemento de React
    return(
        <header>
            <h1>Hola {value}</h1>
        </header>
    )
}

export default myComponent;