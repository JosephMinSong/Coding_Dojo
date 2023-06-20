import styles from "../App.module.css"
import AuthorForm from "../Components/AuthorForm"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'

export default function Edit() {

    const [author, setAuthor] = useState()
    const { id } = useParams()

    const getAuthorData = () => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => setAuthor(res.data))
            .catch(err => console.log(err))
    }

    useEffect( getAuthorData, [] )

    return (
        <div className={ styles.edit_form }>
            <h2>Edit this author</h2>
            {author ? 
            <AuthorForm 
            reqType='put'
            authorData={ author }
            />
            :
            <h1>Loading...</h1>
            }
        </div>
    )
}