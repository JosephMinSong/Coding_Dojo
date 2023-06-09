import styles from '../App.module.css'
import { useState } from 'react'

export default function ProductForm ( { productValues, buttonName, service, successFunction } ) {

    const initialValues = productValues ?? {
        title : '',
        price : '',
        description : ''
    }

    const [product, setProduct] = useState({ ...initialValues })
    const [errors, setErrors] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()

        service({
            title : product.title,
            price : product.price,
            description : product.description
        })
            .then( res => {
                successFunction(res.data)
                setProduct({...initialValues})
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

    const handleChange = (e) => {
        const name = e.target.name 
        setProduct(current => ( { ...current, [name] : e.target.value } ))
    }

    if (!product) return <h1>Loading...</h1>

    return (
        <form onSubmit={ handleSubmit } className={ styles.form }>

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

        <button> { buttonName } </button>
        
        </form>
    )
}