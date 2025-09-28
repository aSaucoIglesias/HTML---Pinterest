import React from 'react'
 
const MyComponentAsync = () => {

    const [name, setName] = React.useState('Antonio');
    React.useEffect( () => {
        console.log(1, name);
        setName('Antxon');
        console.log(2, name);
    }, [])
    return (
        <p>Hola mi nombre es {name}</p>
    )
 }

 export default MyComponentAsync;
 