import AllProducts from "../Components/AllProducts"
import ProductForm from "../Components/ProductForm"
import styles from "../App.module.css"
import axios from 'axios'
import { useState, useEffect } from "react"
import { createProduct } from "../Services/ProductServices"
import { getAllProducts } from "../Services/ProductServices"

export default function Main() {

    const [products, setProducts] = useState([])

    // Get all items
    const getAll = () => {
        getAllProducts()
        .then(res => setProducts(res.data))
        .catch(err => console.log(err))
    }

    const addProduct = (formData) => {
        setProducts(current => [...current, formData])
    }

    const removeProduct = (id) => {
        products.filter(item_id => item_id !== id)
    }

    // Get all items when products change
    useEffect( getAll, [] )

    // List of products and function to add to list and function to remove
    return (
        <div className={ styles.main }>
            <h1>Add a Product</h1>
            <ProductForm 
                buttonName='Create'
                service={ createProduct }
                successFunction={ addProduct }
            />
            <hr/>
            <AllProducts 
                products={ products }
                removeProduct={ removeProduct }
            />
        </div>
    )
}