import { Routes, Route } from 'react-router-dom'
import SearchForm from "./Components/SearchForm"
import SearchResult from "./Components/SearchResult"
import ErrorPage from "./Components/ErrorPage"
import styles from "./App.module.css"
import { useState } from 'react'

export default function App() {

    const [isSubmitted, setIsSubmitted] = useState(false)

    return (
        <div className={ styles.app }>
            <h1> Luke APIWalker </h1>
            <SearchForm  isSubmitted={ isSubmitted } setIsSubmitted={ setIsSubmitted }/>
            <Routes>
                <Route path="/:category/:id" element={<SearchResult isSubmitted={ isSubmitted } setIsSubmitted={ setIsSubmitted }/>} />
                <Route path="/404" element={<ErrorPage />} />
            </Routes>
        </div>
    )
}