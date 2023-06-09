import { useState } from 'react'
import styles from "./ColorForm.module.css"

export default function ColorForm (props) {
    const initialValues = {
        "color": "",
        "size": ""
    }

    const [form, setForm] = useState({...initialValues})

    const handleChange = (e) => {
        let name = e.target.name

        setForm(currentForm => ({...currentForm, [name] : e.target.value}))
    }

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
                <input type="number" name="size" onChange={ handleChange } value={ form.size }/>
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}