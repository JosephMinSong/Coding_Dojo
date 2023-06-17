import { useState } from "react"
import axios from 'axios'

export default function ProductForm () {

    const initialValues = {
        title : '',
        price : '',
        description : ''
    }

    const [product, setProduct] = useState({ ...initialValues })

    const handleChange = (e) => {
        const name = e.target.name 

        setProduct(current => ( { ...current, [name] : e.target.value } ))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('/api/product', {
            title : product.title,
            price : product.price,
            description : product.description
        })
            .then( res => console.log(res) )
            .catch( err => console.log(err))
    }

    return (
        <form onSubmit={ handleSubmit }>
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
    )
}