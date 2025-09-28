import React from 'react'

const Review = ( {title, score} ) => {
    console.log("Renderizando Review");
    return (
        <>
            <p>{title} || {score}</p>
        </>
    )
}

export default Review