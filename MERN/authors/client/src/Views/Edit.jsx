import styles from "../App.module.css"
import AuthorForm from "../Components/AuthorForm"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getOneAuthor, updateAuthor } from "../Services/AuthorServices"

export default function Edit() {

    const [author, setAuthor] = useState()
    const { id } = useParams()

    const getAuthorData = () => {
        getOneAuthor(id)
            .then(res => setAuthor(res.data))
            .catch(err => console.log(err))
    }

    useEffect( getAuthorData, [] )

    return (
        <div className={ styles.edit_form }>
            <h2>Edit this author</h2>
            {author ? 
            <AuthorForm 
            authorData={ author }
            service={ (authorData) => updateAuthor(id, authorData) }
            />
            :
            <h1>Loading...</h1>
            }
        </div>
    )
}