import styles from "../App.module.css"
import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import ProductForm from "../Components/ProductForm"

export default function Edit() {

    const initialValues = {
        title : '',
        price : '',
        description : ''
    }

    const buttonName = 'Edit'

    const [product, setProduct] = useState({ ...initialValues })
    const [errors, setErrors] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()

    const getProductData = () => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }

    useEffect( getProductData, [] )

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.put(`http://localhost:8000/api/products/${id}/edit`, {
            title : product.title,
            price : product.price,
            description : product.description
        })
            .then( res => {
                navigate('/')
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
        <>
        <h1>Edit a product</h1>
        <ProductForm 
            product={ product } 
            setProduct={ setProduct } 
            errors={ errors } 
            handleSubmit={ handleSubmit } 
            buttonName={ buttonName }
        />
        <Link to='/'>Back to All Products</Link>
        </>
    )
}