import React from 'react'
import { useState, useEffect} from 'react'

 function Pokemon() {

    const [pokemon,setPokemon] = useState();
    const [id,setId] = useState(1);

    useEffect(() => {
         fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
            setPokemon(data)
        })
    },[id])
    
    const handleAnterior = () => {
        setId(id - 1 );
        console.log(id)
    }

    const handleNext = () => {
        setId(id + 1 );
        console.log(id)
    }

  return (
    <div>{
            pokemon && (
            <div>  
                <h2>{pokemon.name}</h2>
                <img  src={pokemon.sprites.front_default} alt={pokemon.name} />     
                <hr/>
                {id >1 &&
                <button onClick={handleAnterior}>Anterior</button>
                }
                <button onClick={handleNext}>Siguiente</button>
            </div>
        )}
    </div>
  )
 }

export default Pokemon
