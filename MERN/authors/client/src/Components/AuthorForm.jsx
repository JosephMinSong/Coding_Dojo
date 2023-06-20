import styles from "../App.module.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function AuthorForm({ authorData, service }) {

    const initialValues = authorData

    const [author, setAuthor] = useState({...initialValues})
    const [error, setError] = useState([])
    const navigate = useNavigate()

    const handleChange = (e) => {
        const name = e.target.name

        setAuthor(current => ({...current, [name] : e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        service(author)
            .then(res => navigate('/'))
            .catch(err => {
                setError({name : err.response.data.errors.name.message})
            })
    }

    return (
        <form className={ styles.author_form } onSubmit={ handleSubmit }>
            { error && <p className={ styles.error_message }> {error.name} </p> }
            <label htmlFor="name">Name: </label>
            <input type="text" id='name' name='name' value={ author.name } onChange={ handleChange }></input>
            <button type='button' onClick={ () => navigate('/') }>Cancel</button>
            <button>Submit</button>
        </form>
    )
}