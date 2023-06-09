import { useState } from 'react'
import styles from "./ColorForm.module.css"

export default function ColorForm (props) {
    // Initial values to be set
    const initialValues = {
        "color": "",
        "size": ""
    }

    // form contains color and size information as an object
    const [form, setForm] = useState({...initialValues})

    // on change handler
    const handleChange = (e) => {
        let name = e.target.name

        // callbacks queue up the actions inputted, guarenteeing that you have the correct ORDER of inputs
        // if state depends on the previous state
        setForm(currentForm => ({...currentForm, [name] : e.target.value}))
    }

    // on submit handler; we call onNewBox, which is in App = we call it via props
    // which activates the function in App through the child
    const handleSubmit = (e) => {
        e.preventDefault()
        props.onNewBox(form)
        setForm({...initialValues})
    }

    return (
        <div className={ styles.color_form }>
            <form onSubmit={ handleSubmit }>
                <label>Color: </label>
                <input type="text" name="color" onChange={ handleChange } value={ form.color }/>
                <label>Size: </label>
                <input type="number" name="size" onChange={ handleChange } value={ form.size }/>
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}