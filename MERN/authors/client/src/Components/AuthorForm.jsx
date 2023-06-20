import styles from "../App.module.css"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios'
import { useAuthorContext } from "../Context/AuthorContext"

export default function AuthorForm({ reqType, authorData }) {

    const initialValues = authorData

    const [author, setAuthor] = useState({...initialValues})
    const [error, setError] = useState([])
    const navigate = useNavigate()
    const { id } = useParams()

    const { setAuthors } = useAuthorContext()

    const handleChange = (e) => {
        const name = e.target.name

        setAuthor(current => ({...current, [name] : e.target.value}))
    }

    const goBack = (e) => {
        e.preventDefault() 
        navigate('/')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios[`${reqType}`](`http://localhost:8000/api/authors/${ id ?? '' }`, {name : author.name})
            .then(res => {
                if (reqType == 'post'){
                    setAuthors(current => [...current, res.data])
                } else {
                    setAuthors(current => [...current])
                }
                navigate('/')
            })
            .catch(err => {
                setError({name : err.response.data.errors.name.message})
            })
    }

    return (
        <form className={ styles.author_form } onSubmit={ handleSubmit }>
            { error && <p className={ styles.error_message }> {error.name} </p> }
            <label htmlFor="name">Name: </label>
            <input type="text" id='name' name='name' value={ author.name } onChange={ handleChange }></input>
            <button onClick={ goBack }>Cancel</button>
            <button>Submit</button>
        </form>
    )
}