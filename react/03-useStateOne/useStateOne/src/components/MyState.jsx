import React, { useState } from 'react'

const MyState = () => {
    const [name, setName] = useState("Ziggy Stardust");
    return (
        <div className="my-class">
            <h1>Bienvenido {name}</h1>
            <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    )
}

export default MyState