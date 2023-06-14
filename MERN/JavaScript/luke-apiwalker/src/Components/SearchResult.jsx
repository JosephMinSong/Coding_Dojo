import styles from "../App.module.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

export default function SearchResult( { isSubmitted, setIsSubmitted } ) {

    const { category, id } = useParams()
    const [result, setResult] = useState({
        name : '',
        mass : '',
        hairColor: '',
        skinColor : '',
        home : ''
    })
    const navigate = useNavigate()

    const getResult = () => {
        axios.get(`https://swapi.dev/api/${category}/${id}`).then(response => {
            if (category === 'people'){
                const homePlaneturl = response.data.homeworld
                let homePlanet
                axios.get(homePlaneturl).then(response => {
                    homePlanet = response.data.name
                    setResult( current => ({ ...current, home : homePlanet }) )
                })
                const personData = response.data

                setResult(current => ({...current, 
                    name : personData.name,
                    mass : personData.mass,
                    hairColor: personData.hair_color,
                    skinColor : personData.skin_color}))
            } else {
                const planetData = response.data

                setResult({
                    name : planetData.name,
                    climate : planetData.climate,
                    terrain : planetData.terrain,
                    surfaceWater : planetData.surface_water,
                    population : planetData.population
                })
            }

            setIsSubmitted(false)
        }).catch(() => {
            navigate('/404')
            setIsSubmitted(false)
        })
    }

    useEffect( getResult, [ isSubmitted ])

    return (
        <div className={ styles.search_result }>
            <h1> { result.name } </h1>
            {category === 'people' ? 
                <ul className={ styles.list }>
                    <li> <span className={ styles.bold } >Mass:</span> { result.mass } </li>
                    <li> <span className={ styles.bold } >Hair Color:</span> { result.hairColor } </li>
                    <li> <span className={ styles.bold } >Skin Color:</span> { result.skinColor } </li>
                    <li> <span className={ styles.bold } >Home Planet:</span> { result.home } </li>
                </ul> :
                <ul className={ styles.list }>
                    <li> <span className={ styles.bold } >Climate:</span> { result.climate } </li>
                    <li> <span className={ styles.bold } >Terrain:</span> { result.terrain } </li>
                    <li> <span className={ styles.bold } >Surface Water:</span> { result.surfaceWater } </li>
                    <li> <span className={ styles.bold } >Population:</span> { result.population } </li>
                </ul>}
        </div>
    )
}