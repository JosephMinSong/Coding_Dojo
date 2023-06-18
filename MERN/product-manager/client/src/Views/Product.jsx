import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import styles from "../App.module.css"
import DeleteButton from '../Components/DeleteButton'
import { useProductContext } from '../Context/ProductContext'

export default function Product() {

    // Get all required values
    const [product, setProduct] = useState()
    const [loaded, setLoaded] = useState(false)
    const { id } = useParams()
    const navigate = useNavigate()

     // Get delete button functionality from context
    const { handleDelete } = useProductContext()

    // Get one product info
    const getProductData = () => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }

    // Get one product info on page load
    useEffect( getProductData, [] )

    return (
        <div className={ styles.product_data }>
            { loaded &&
            <>
                <h3>Title: { product.title } </h3>
                <p>Price: ${ product.price }</p>
                <p>Description: { product.description } </p>
                <Link to='/'>Back to all products</Link>
                <br/>
                <Link to={ `/product/${id}/edit` }>Edit Item </Link>
                <br/>
                <DeleteButton callBackFunction={ () => {
                    handleDelete(id) 
                    navigate('/')
                    }
                }
                />
            </>
            }  
        </div>
    )
}