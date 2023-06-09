import { useState } from 'react'
import styles from "./ColorForm.module.css"

export default function ColorForm (props) {
    const [color, setColor] = useState("")

    const handleChange = (e) => {
        setColor(e.target.value)
    }

    return (
        <div className={ styles.color_form }>
            <form onSubmit={ props.onChangeColor(color) }>
                <label>Color: </label>
                <input type="text" onChange={ handleChange } value={ color }/>
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}