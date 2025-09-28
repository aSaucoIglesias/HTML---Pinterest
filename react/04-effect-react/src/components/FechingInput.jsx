import React, { useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce';

const FechingInput = () => {
    const [filter, setFilter] = useState("charmander");
    const [debounceFilter] = useDebounce(filter, 500);
    const [pokemon, setPokemon] = useState([]);

    useEffect(()=> {
        const getPokemonFiltered = async () => {
            const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${filter}`);
            const pokemonJson = await pokemon.json();

            return{
                ...pokemonJson,
                name: pokemonJson.name,
                id: pokemonJson.id,
                img: pokemonJson.sprites.back_shiny
            }

        }

        getPokemonFiltered().then((pokemon)=> setPokemon([pokemon]))

    },[debounceFilter])

    return (
        <div>
            <input
                type="text" value={filter}
                onChange={ (e) => setFilter(e.target.value) }
            />
            <div>
                {
                    pokemon.map((p) => (
                        <div key={p.id}>
                            <h2>{p.name}</h2>
                            <img src={p.img} alt={p.name} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FechingInput