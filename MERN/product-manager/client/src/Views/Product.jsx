import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from "../App.module.css"

export default function Product() {

    const [product, setProduct] = useState({
        title : '',
        price : '',
        description : ''
    })

    const { id } = useParams()

    const getProductData = () => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }

    useEffect( getProductData, [] )

    return (
        <div className={ styles.product_data }>
            <h3>Title: { product.title } </h3>
            <p>Price: { product.price }</p>
            <p>Description: { product.description } </p>
            <Link to='/'>Back to all products</Link>
        </div>
    )
}