import styles from "../App.module.css"
import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function EditProduct() {
    const initialValues = {
        title : '',
        price : '',
        description : ''
    }

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

    const handleChange = (e) => {
        const name = e.target.name 
        setProduct(current => ( { ...current, [name] : e.target.value } ))
    }

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
                console.log(allErrors)
                setErrors({
                    title : allErrors?.title?.message,
                    price : allErrors?.price?.message,
                    description : allErrors?.description?.message
                })
            })
    }

    return (
        <>
        <form onSubmit={ handleSubmit } className={ styles.form }>
            <h1>Edit a product</h1>
            { errors.title && <p className={ styles.error_message }>{ errors.title }</p> }
            <label htmlFor="title">Title: </label>
            <input type="text" id='title' name="title" value={ product.title } onChange={ handleChange }/>
            <br/>
            { errors.price && <p className={ styles.error_message }>{ errors.price }</p> }
            <label htmlFor="price">Price: </label>
            <input type="number" id='price' name="price" value={ product.price } onChange={ handleChange }/>
            <br/>
            { errors.description && <p className={ styles.error_message }>{ errors.description }</p> }
            <label htmlFor="description">Description: </label>
            <input type="text" id="description" name="description" value={ product.description } onChange={ handleChange }/>
            <br />
            <button>Edit</button>
        </form>
        <Link to='/'>Back to All Products</Link>
        </>
    )
}