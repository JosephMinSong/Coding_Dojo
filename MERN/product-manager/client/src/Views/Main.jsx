import AllProducts from "../Components/AllProducts"
import ProductForm from "../Components/ProductForm"
import styles from "../App.module.css"

export default function Main() {
    return (
        <div className={ styles.main }>
            <ProductForm />
            <hr/>
            <AllProducts />
        </div>
    )
}