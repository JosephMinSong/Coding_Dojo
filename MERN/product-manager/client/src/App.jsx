import styles from "./App.module.css"
import { Routes, Route } from 'react-router-dom'
import Main from './Views/Main'
import Product from './Views/Product'
import Edit from "./Views/Edit"

export default function App() {

    return (
        <div className={ styles.app }>
            <h1> Product Manager </h1>
            <Routes>
                <Route path='/' element={ <Main />} />
                <Route path='/product/:id' element={ <Product /> } />
                <Route path='/product/:id/edit' element={ <Edit /> } />
            </Routes>
        </div>
    )
}