import styles from "./App.module.css"
import { Routes, Route } from 'react-router-dom'
import Main from "./Views/Main"
import Edit from "./Views/Edit"
import New from "./Views/New"
import axios from 'axios'
import { useState, useEffect } from "react"
import AuthorContext from "./Context/AuthorContext"

export default function App(){

    const [authors, setAuthors] = useState([])

    const getAllAuthors = () => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => setAuthors(res.data))
            .catch(err => console.log(err))
    }

    return (
        <div className={ styles.app }>
            <h1>Favorite Authors</h1>
            <AuthorContext.Provider value={ {authors, setAuthors} }>
                <Routes>
                    <Route path='/' element={ <Main getAllAuthors={ getAllAuthors }/> } />
                    <Route path='/authors/new' element={ <New />} />
                    <Route path='/authors/:id/edit' element={ <Edit />} />
                </Routes>
            </AuthorContext.Provider>
        </div>
    )
}