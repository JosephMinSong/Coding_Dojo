import { useState } from "react"
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import styles from '../App.module.css'

export default function ProductForm () {

    const initialValues = {
        title : '',
        price : '',
        description : ''
    }

    const [product, setProduct] = useState({ ...initialValues })

    const navigate = useNavigate()

    const handleChange = (e) => {
        const name = e.target.name 

        setProduct(current => ( { ...current, [name] : e.target.value } ))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:8000/api/products', {
            title : product.title,
            price : product.price,
            description : product.description
        })
            .then( res => {
                console.log(res)
                navigate('/')
            } )
            .catch( err => console.log(err))
    }

    return (
        <>
        <form onSubmit={ handleSubmit } className={ styles.form }>
            <h1>Add a product</h1>
            <label htmlFor="title">Title: </label>
            <input type="text" id='title' name="title" value={ product.title } onChange={ handleChange }/>
            <br/>
            <label htmlFor="price">Price: </label>
            <input type="number" id='price' name="price" value={ product.price } onChange={ handleChange }/>
            <br/>
            <label htmlFor="description">Description: </label>
            <input type="text" id="description" name="description" value={ product.description } onChange={ handleChange }/>
            <br />
            <button>Create</button>
        </form>
        <Link to='/'> Go Back Home</Link>
        </>
    )
}