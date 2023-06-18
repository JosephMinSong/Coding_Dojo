import styles from "./App.module.css"
import { Routes, Route } from 'react-router-dom'
import Main from './Views/Main'
import Product from './Views/Product'
import Edit from "./Views/Edit"
import ProductContext from './Context/ProductContext'
import axios from 'axios'

export default function App() {

    // Handle Delete
    const handleDelete = id => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const myNumber = 5

    return (
        <div className={ styles.app }>
            <h1> Product Manager </h1>
            <ProductContext.Provider value={ { handleDelete } }>
                <Routes>
                    <Route path='/' element={ <Main />} />
                    <Route path='/product/:id' element={ <Product /> } />
                    <Route path='/product/:id/edit' element={ <Edit /> } />
                </Routes>
            </ProductContext.Provider>
        </div>
    )
}