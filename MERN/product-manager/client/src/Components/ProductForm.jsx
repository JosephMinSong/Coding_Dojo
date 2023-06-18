import styles from '../App.module.css'

export default function ProductForm ( { product, setProduct, errors, handleSubmit, buttonName } ) {

    const handleChange = (e) => {
        const name = e.target.name 
        setProduct(current => ( { ...current, [name] : e.target.value } ))
    }

    return (
        <form onSubmit={ handleSubmit } className={ styles.form }>
            { errors.title && <p className={ styles.error_message }>{ errors.title }</p> }
            <label htmlFor="title">Title: </label>
            <input type="text" id='title' name="title" value={ product.title } onChange={ handleChange }/>
            <br/>
            { errors.price && <p className={ styles.error_message }>{ errors.price }</p> }
            <label htmlFor="price">Price: </label>
            <input type="number" id='price' name="price" value={ product.price } onChange={ handleChange }/>
            <br/>
            { errors.description && <p className={ styles.error_message }>{ errors.description }</p> }
            <label htmlFor="description">Description: </label>
            <input type="text" id="description" name="description" value={ product.description } onChange={ handleChange }/>
            <br />
            <button> { buttonName } </button>
        </form>
    )
}