import React, { useState } from 'react'
import MessageComponent from './MessageComponent'

const EffectUnmount = () => {

    const [ visible, setVisible] = useState(false)
    return (
        <>
            {visible && <MessageComponent />}
            <button type="button" onClick={() => setVisible(!visible)}> I'm inevitable</button>
        </>
    )
}

export default EffectUnmount