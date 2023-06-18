import AllProducts from "../Components/AllProducts"
import ProductForm from "../Components/ProductForm"
import styles from "../App.module.css"
import axios from 'axios'
import { useState } from "react"

export default function Main() {

    // Initial values for adding a product
    const initialValues = {
        title : '',
        price : '',
        description : ''
    }

    const buttonName = 'Create'

    const [product, setProduct] = useState({ ...initialValues })
    const [errors, setErrors] = useState([])

    // Handle Submit
    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors( { ...initialValues } )

        axios.post('http://localhost:8000/api/products', {
            title : product.title,
            price : product.price,
            description : product.description
        })
            .then( res => {
                setProduct({ ...initialValues })
            } )
            .catch( err => {
                const allErrors = err.response.data.errors
                setErrors({
                    title : allErrors?.title?.message,
                    price : allErrors?.price?.message,
                    description : allErrors?.description?.message
                })
            })
    }

    return (
        <div className={ styles.main }>
            <h1>Add a Product</h1>
            <ProductForm 
                product={ product } 
                setProduct={ setProduct } 
                errors={ errors } 
                handleSubmit={ handleSubmit }
                buttonName={ buttonName }
            />
            <hr/>
            <AllProducts />
        </div>
    )
}