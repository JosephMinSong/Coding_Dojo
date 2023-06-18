import AllProducts from "../Components/AllProducts"
import ProductForm from "../Components/ProductForm"
import styles from "../App.module.css"
import { useState } from "react"

export default function Main() {

    const [products, setProducts] = useState([])

    return (
        <div className={ styles.main }>
            <ProductForm products={ products } setProducts={ setProducts }/>
            <hr/>
            <AllProducts products={ products } setProducts={ setProducts }/>
        </div>
    )
}