import styles from "./App.module.css"
import { useState } from 'react'
import axios from 'axios'

export default function App() {
    
    const [pokemons, setPokemons] = useState([])

    // Fetch method
    // const getAllPokemon = () => {
    //     fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    //     .then(r => r.json())
    //     .then(data => {
    //         for (let i = 0; i < data.results.length; i++){
    //             setPokemons(p => [...p, { 'id' : i+1 , 'name': data.results[i].name}])
    //         }
    //     })
    // }

    // Axios method
    const getAllPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807").then(response => {
            for (let i = 0; i < response.data.results.length; i++){
                setPokemons(pokemon => [...pokemon, { 'id' : i+1, 'name' : response.data.results[i].name }])
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