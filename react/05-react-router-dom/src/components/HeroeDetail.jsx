import React from 'react'

const HeroeDetail = ({ heroe }) => {
    return (
        <>
            <h4>Nombre: { heroe.name} </h4>
            <p>Alias: { heroe.alias} </p>
            <p>Edad: { heroe.age} </p>
        </>
    )
}

export default HeroeDetail