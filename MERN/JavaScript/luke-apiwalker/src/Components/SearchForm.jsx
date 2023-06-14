import styles from "../App.module.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SearchForm( { isSubmitted, setIsSubmitted } ) {

    const initialValues = {
        'category' : 'people',
        'id' : 1
    }

    const [search, setSearch] = useState({ ...initialValues })
    const navigate = useNavigate()

    const handleChange = (e) => {
        const name = e.target.name
        setSearch( current => ({ ...current, [name] : e.target.value }) )
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsSubmitted(true)
        console.log(isSubmitted)
        navigate(`/${search.category}/${search.id}`)
    }


    return (
        <form className={ styles.form } onSubmit={ handleSubmit }>
            <label htmlFor="category">Search For: </label>
            <select name="category"  value={ search.category } onChange={ handleChange }>
                <option value="people">people</option>
                <option value="planets">planets</option>
            </select>

            <label htmlFor="id">ID: </label>
            <input type="number" name="id" value={ search.id } onChange={ handleChange }></input>

            <button>Search</button>
        </form>
    )
}