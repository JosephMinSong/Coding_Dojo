import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import styles from "../App.module.css"
import DeleteButton from '../Components/DeleteButton'
import { getOneProduct } from '../Services/ProductServices'
import { deleteButton } from '../Services/ProductServices'

export default function Product() {

    // Get all required values
    const [product, setProduct] = useState()
    const { id } = useParams()
    const navigate = useNavigate()

    // Get one product info
    const getProductData = () => {
        getOneProduct(id)
            .then(res => {
                setProduct(res.data)
            })
            .catch(err => console.log(err))
    }

    // Get one product info on page load
    useEffect( getProductData, [] )

    if (!product) return <h1>Loading</h1>

    return (
        <div className={ styles.product_data }>
            { product &&
            <>
                <h3>Title: { product.title } </h3>
                <p>Price: ${ product.price }</p>
                <p>Description: { product.description } </p>
                <Link to='/'>Back to all products</Link>
                <br/>
                <Link to={ `/product/${id}/edit` }>Edit Item </Link>
                <br/>
                <DeleteButton id={ id } successFunction={ () => navigate('/') }/>
            </>
            }  
        </div>
    )
}