import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import styles from "../App.module.css"

export default function Product() {

    const [product, setProduct] = useState({
        title : '',
        price : '',
        description : ''
    })

    const { id } = useParams()
    const navigate = useNavigate()

    // Get one product info
    const getProductData = () => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }

    // Get one product info on page load
    useEffect( getProductData, [] )

    // Handle Delete
    const handleDelete = id => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => navigate('/'))
            .catch(err => console.log(err))
    }

    return (
        <div className={ styles.product_data }>
            <h3>Title: { product.title } </h3>
            <p>Price: { product.price }</p>
            <p>Description: { product.description } </p>
            <Link to='/'>Back to all products</Link>
            <Link to={ `/product/${id}/edit` }>Edit Item </Link>
            <button onClick={ () => handleDelete(id) }>Delete</button>
        </div>
    )
}