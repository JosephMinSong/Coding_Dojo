import styles from "./Form.module.css"
import { useUserContext } from "../Wrapper/Wrapper"
import { useState } from 'react'

export default function Form () {

    // added functionality for users to complete their name before submitting to render in Navbar
    const [ userName, setUserName ] = useState("")

    // we have access to setUser from our hook
    // this hook is calling a function to call the useContext function to reference our UserContext context
    const { setUser } = useUserContext()

    // handle input change
    const handleChange = (e) => {
        setUserName(e.target.value)
    }

    // handle form submit
    const handleSubmit = (e) => {
        e.preventDefault()

        setUser(userName)
    }

    return (
        <form className={ styles.form } onSubmit={ handleSubmit }>
            <label htmlFor="user_name">Enter your name here: </label>
            <input type="text" id="user_name" onChange={ handleChange } value={ userName }></input>
            <button>Submit</button>
        </form>
    )
}