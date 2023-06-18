import styles from '../App.module.css'
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function AllProducts () {

    const [products, setProducts] = useState([])
    const [errors, setErrors] = useState([])

    const getAll = () => {
        axios.get('http://localhost:8000/api/products').then(res => {
            setProducts(res.data)
        })
            .catch(err => console.log(err))
    }

    useEffect( getAll, [] )

    return (
        <div className={ styles.all_products }>
            <h2>All Products: </h2>
            <ul className={ styles.product_list }>
                { products.length < 1 ?
                <h3>No Products in Inventory</h3>
                :
                products.map( one => {
                    return <li key={ one._id }>
                        <Link to={ `/product/${ one._id }` }> { one.title } </Link>
                    </li>
                } )}
            </ul>
        </div>
    )
}