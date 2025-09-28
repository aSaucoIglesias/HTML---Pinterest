import React, { useState, useEffect } from 'react'

const Count = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Acabo de contar y el contador es: ", count)
    }, [count])

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1) } type="button">Increment</button>
            <button onClick={() => setCount(count - 1) } type="button">Decrement</button>
        </div>
    )
}

export default Count