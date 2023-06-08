import { useState } from 'react'
import styles from './UserForm.module.css'

export default function UserForm () {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    const [firstNameError, setFirstNameError] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")

    const createUser = (e) => {
        e.preventDefault()

        const newUser = { firstname, lastname, email, password }
        console.log(newUser)
        setFirstname("")
        setLastname("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        setHasBeenSubmitted(true)
    }
    
    const handleValidFirstName = (e) => {
        if (e.target.value.length === 0){
            setFirstNameError("")
        } else if (e.target.value.length < 2){
            setFirstNameError("First name must be at least 2 characters long")
        } else {
            setFirstNameError("")
        }
    }

    const handleValidLastName = (e) => {
        if (e.target.value.length === 0){
            setLastNameError("")
        } else if (e.target.value.length < 2){
            setLastNameError("Last name must be at least 2 characters long")
        } else {
            setLastNameError("")
        }
    }

    const handleValidEmail = (e) => {
        if (e.target.value.length === 0){
            setEmailError("")
        } else if (e.target.value.length < 5){
            setEmailError("Email must be at least 5 characters long")
        } else {
            setEmailError("")
        }
    }

    const handleValidPassword = (e) => {
        if (e.target.value.length === 0){
            setPasswordError("")
        } else if (e.target.value.length < 8){
            setPasswordError("Password must be at least 8 characters long")
        } else {
            setPasswordError("")
        }
    }

    const handleValidConfirmPassword = (e) => {
        if (e.target.value.length === 0){
            setConfirmPasswordError("")
        } else if (e.target.value != password){
            setConfirmPasswordError("Passwords must match")
        } else if (e.target.value === password) {
            setConfirmPasswordError("")
        } else {
            setConfirmPasswordError("")
        }
    }

    return (
        <>
            <form onSubmit={ createUser } className={ styles.user_form }>

                <div>
                    {
                        !hasBeenSubmitted ? 
                            <h1>Welcome! Please submit this form</h1> :
                            <h1>Thank you for submitting your form</h1>
                    }
                </div>

                <div className={ styles.input }>
                    <label>First Name: </label>
                    <input 
                        type='text' 
                        value={ firstname } 
                        onChange={ (e) => { setFirstname(e.target.value); handleValidFirstName(e) } }
                    />

                    {
                        firstNameError?
                            <p> {firstNameError} </p> :
                            ''
                    }

                </div>

                <div className={ styles.input }>
                    <label>Last Name: </label>
                    <input 
                        type='text' 
                        value={ lastname } 
                        onChange={ (e) => { setLastname(e.target.value); handleValidLastName(e) } }
                    />

                    {
                        lastNameError ?
                            <p> {lastNameError} </p> :
                            ''
                    }

                </div>

                <div className={ styles.input }>
                    <label>Email: </label>
                    <input 
                        type='email' 
                        value={ email } 
                        onChange={ (e) => { setEmail(e.target.value); handleValidEmail(e) } } 
                    />

                    {
                        emailError ?
                            <p> {emailError} </p> :
                            ''
                    }

                </div>

                <div className={ styles.input }>
                    <label>Password: </label>
                    <input 
                        type='text' 
                        value={ password } 
                        onChange={ (e) => { setPassword(e.target.value); handleValidPassword(e) } } 
                    />

                    {
                        passwordError ?
                            <p> {passwordError} </p> :
                            ''
                    }

                </div>

                <div className={ styles.input }>
                    <label>Confirm Password: </label>
                    <input 
                        type='text' 
                        value={ confirmPassword } 
                        onChange={ (e) => { setConfirmPassword(e.target.value); handleValidConfirmPassword(e) } } 
                    />

                    {
                        confirmPasswordError ?
                            <p> {confirmPasswordError} </p> :
                            ''
                    }

                </div>

                <input type='submit' />
            </form>
            <div>
                <h2>Your Form Data</h2>
                <p>First Name: { firstname }</p>
                <p>Last Name: { lastname }</p>
                <p>Email: { email }</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </>
    )
}