import styles from "./App.module.css"
import { Routes, Route } from 'react-router-dom'
import ProductForm from "./Components/ProductForm"
import AllProducts from "./Components/AllProducts"

export default function App() {
    return (
        <>
        <h1> Product Manager </h1>
        <Routes>
            <Route path='/' element={ <AllProducts /> } />
            <Route path='/add' element={ <ProductForm /> } />
        </Routes>
        </>
    )
}