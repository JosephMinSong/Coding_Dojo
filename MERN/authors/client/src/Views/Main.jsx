import styles from "../App.module.css"
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"
import { deleteAuthor } from "../Services/AuthorServices"
import { getAll } from "../Services/AuthorServices"

export default function Main() {

    const [authors, setAuthors] = useState([])

    const getAllAuthors = () => {
        getAll()
            .then(res => setAuthors(res.data))
            .catch(err => console.log(err))
    }
    
    const handleDelete = (id) => {
        deleteAuthor(id)
            .then(res => {
                setAuthors(authors => {
                    return authors.filter(author => author._id != id)
                })
            })
            .catch(err => console.log(err))
    }

    useEffect( getAllAuthors, [] )

    return (
        <div className={ styles.main }>
            <Link to="/authors/new">Add an author</Link>
            <h2>We have quotes by: </h2>
            <table className={ styles.table }>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.length > 0 ? 
                    authors.map( one => {
                        return <tr key={ one._id }>
                            <td>{ one.name }</td>
                            <td>
                                <Link to={ `/authors/${one._id}/edit` }>Edit</Link>
                                <button onClick={() => handleDelete(one._id) }>Delete</button>
                            </td>
                        </tr>
                    } )
                    :
                    <tr>
                        <td>No Authors Available yet</td>
                    </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}