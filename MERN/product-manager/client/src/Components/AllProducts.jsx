import styles from '../App.module.css'
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function AllProducts () {

    const [products, setProducts] = useState([])

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
            <Link to='/add'>Add a product</Link>
            <ul>
                { products.length < 1 ?
                <h3>No Products in Inventory</h3>
                :
                products.map( one => {
                    return <li key={ one._id }>
                        { one.title }
                    </li>
                } )}
            </ul>
        </div>
    )
}