import React, {memo} from 'react'

const MovieComponent = ({ title, poster }) => {
    console.log("Renderizando Movies")
    return (
        <>
            <h3>{ title }</h3>
            <img 
                src={poster} 
                alt={`Cartel de la película ${title}`} 
                title={`Cartel de la película ${title}`} 
                width={200}
            />
        </>
    )
}

const Movie = memo(MovieComponent)

export default Movie