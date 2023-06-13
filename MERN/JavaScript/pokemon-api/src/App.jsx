import styles from "./App.module.css"
import { useState } from 'react'

export default function App() {
    
    const [pokemons, setPokemons] = useState([])

    const getAllPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(r => r.json())
        .then(data => {
            for (let i = 0; i < data.results.length; i++){
                setPokemons(p => [...p, { 'id' : i+1 , 'name': data.results[i].name}])
            }
        })
    }

    return (
        <div className={ styles.App }>
            <button onClick={ getAllPokemon }> Get All Pokemon </button>
            { pokemons.map(pokemon => {
                return (
                    <p> { pokemon.id } { pokemon.name } </p>
                )
            }) }
        </div>
    )
}