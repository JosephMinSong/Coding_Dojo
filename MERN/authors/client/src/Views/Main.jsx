import styles from "../App.module.css"
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"
import axios from 'axios'

export default function Main() {

    const [authors, setAuthors] = useState([])

    const getAllAuthors = () => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => setAuthors(res.data))
            .catch(err => console.log(err))
    }

    useEffect( getAllAuthors, [] )
    
    const handleDelete = (e, id) => {
        e.preventDefault()
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                setAuthors(authors => {
                    return authors.filter(author => author._id != id)
                })
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={ styles.main }>
            <Link to="/authors/new">Add an author</Link>
            <h2>We have quotes by: </h2>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {authors ? 
                    <tr>
                        <td>No Authors Available yet</td>
                    </tr>
                    :
                    authors.map( one => {
                        return <tr key={ one._id }>
                            <td>{ one.name }</td>
                            <td>
                                <Link to={ `/authors/${one._id}/edit` }>Edit</Link>
                                <button onClick={(e) => handleDelete(e, one._id) }>Delete</button>
                            </td>
                        </tr>
                    } )}
                </tbody>
            </table>
        </div>
    )
}