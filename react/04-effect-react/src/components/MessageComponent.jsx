import React, { useEffect } from 'react'

const MessageComponent = () => {

    useEffect(() => {
        console.log("Me monto en el DOM")

        return () => {
            console.log("Me desmonto en el DOM")
        }
    }, [])

    return <h4>I'm the fucking boss</h4>
}

export default MessageComponent