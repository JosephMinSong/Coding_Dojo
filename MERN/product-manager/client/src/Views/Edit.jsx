import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from 'react-router-dom'
import ProductForm from "../Components/ProductForm"
import { getOneProduct } from "../Services/ProductServices"
import { editProduct } from "../Services/ProductServices"

export default function Edit() {

    const [product, setProduct] = useState()
    const { id } = useParams()
    const navigate = useNavigate()

    const getProductData = () => {
        getOneProduct(id)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }

    useEffect( getProductData, [] )

    return (
        <>
        <h1>Edit a product</h1>
        <ProductForm 
            productValues={ product }
            buttonName='Edit'
            service={ (formData) => editProduct(id, formData) }
            successFunction={ () => navigate('/') }
        />
        <Link to='/'>Back to All Products</Link>
        </>
    )
}