import styles from '../App.module.css'
import { useState, useEffect } from "react"
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
            <ul>
                { products.map( one => {
                    return <li>
                        { one.title }
                    </li>
                } ) }
            </ul>
        </div>
    )
}