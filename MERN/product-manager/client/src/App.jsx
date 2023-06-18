import styles from "./App.module.css"
import { Routes, Route } from 'react-router-dom'
import Main from './Views/Main'

export default function App() {
    return (
        <div className={ styles.app }>
            <h1> Product Manager </h1>
            <Routes>
                <Route path='/' element={ <Main /> } />
            </Routes>
        </div>
    )
}