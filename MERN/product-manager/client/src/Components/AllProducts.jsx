import styles from '../App.module.css'
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import axios from 'axios'
import DeleteButton from './DeleteButton'

export default function AllProducts ({ products, removeProduct }) {

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
                        |
                        <Link to={ `/product/${ one._id }/edit` }> Edit </Link>
                        |
                        <DeleteButton id={ one._id } successFunction={ removeProduct(one._id) }/>
                    </li>
                } )}
            </ul>
        </div>
    )
}