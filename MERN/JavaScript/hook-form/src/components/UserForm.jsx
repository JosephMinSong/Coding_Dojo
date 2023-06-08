import { useState } from 'react'
import styles from './UserForm.module.css'

export default function UserForm () {
    // Default values for the user
    const initialValues = {
        'firstName': "",
        'lastName': "", 
        'email': "",
        'password': "",
        'confirmPassword': ""
    }
    
    // User info
    const [user, setUser] = useState({...initialValues})

    //Error info
    const [errors, setErrors] = useState({...initialValues})

    // Checking to see if the form was submitted
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    //On Submit => Create user by creating User object
    const createUser = (e) => {
        e.preventDefault()

        //When everything is submitted, reset input fields and errors
        setUser({...initialValues})
        setErrors({...initialValues})

        //User has submitted something
        setHasBeenSubmitted(true)
    }
    
    // object that hold what the validator should be for each input field - this corresponds to the name of the input field
    const validators = {
        "firstName" : ['minlength', 2],
        "lastName" : ['minlength', 2],
        "email" : ['minlength', 5],
        "password" : ['minlength', 8],
        "confirmPassword" : ['match', 'password']
    }

    const handleChange = (e) => {
        // grab the name of what is being changed
        let name = e.target.name
        
        // set the current state to what is being inputted into the input field
        setUser(currentUser => ({ ...currentUser, [name] : e.target.value }))
        let error = ""

        // deconstruct the array into the validator name and what it's comparing it to
        const [validator, comparator] = validators[name]

        // if the validator is min length AND it's empty => no errors --> same thing for confirm password
        if (validator == "minlength" && e.target.value.length === 0){
            error = ''
        } else if (validator == "minlength"){
            error = e.target.value.length < comparator ? `${name} must be at least ${comparator} characters long` : ""
        } else if (validator == "match" && e.target.value.length === 0) {
            error = ''
        } else if (validator == "match") {
            error = e.target.value != user[comparator] ? `${name} must match ${comparator}` : ""
        }

        setErrors(currentErrors => ({...currentErrors, [name] : error}))
    }
    
    return (
        <>
            <form onSubmit={ createUser } className={ styles.user_form }>

                {/* **************************Form Header***************************** */}
                <div>
                    {
                        !hasBeenSubmitted ? 
                            <h1>Welcome! Please submit this form</h1> :
                            <h1>Thank you for submitting your form</h1>
                    }
                </div>
                
                {/* **************************First Name***************************** */}
                <div className={ styles.input }>
                    <label>First Name: </label>
                    <input 
                        type='text' 
                        value={ user.firstName }
                        name="firstName" 
                        onChange={ handleChange }
                    />

                    {/* if there is an error (meaning it's not a blank string), then this becomes true and the second half runs */}
                    { errors.firstName && <p> {errors.firstName} </p> }
                </div>

                {/* **************************Last Name***************************** */}
                <div className={ styles.input }>
                    <label>Last Name: </label>
                    <input 
                        type='text' 
                        value={ user.lastName } 
                        name="lastName"
                        onChange={ handleChange }
                    />

                    { errors.lastName && <p> {errors.lastName} </p> }
                </div>

                {/* **************************Email***************************** */}
                <div className={ styles.input }>
                    <label>Email: </label>
                    <input 
                        type='email' 
                        value={ user.email } 
                        name="email"
                        onChange={ handleChange } 
                    />

                    { errors.email && <p> {errors.email} </p> }
                </div>

                {/* **************************Password***************************** */}
                <div className={ styles.input }>
                    <label>Password: </label>
                    <input 
                        type='text' 
                        value={ user.password } 
                        name="password"
                        onChange={ handleChange } 
                    />

                    { errors.password && <p> {errors.password} </p> }
                </div>

                {/* **************************Confirm Password***************************** */}
                <div className={ styles.input }>
                    <label>Confirm Password: </label>
                    <input 
                        type='text' 
                        value={ user.confirmPassword } 
                        name="confirmPassword"
                        onChange={ handleChange } 
                    />

                    { errors.confirmPassword && <p> {errors.confirmPassword} </p> }
                </div>
                
                {/* **************************Submit Button***************************** */}
                <input type='submit' />
            </form>

            {/* **************************Relaying form data***************************** */}
            <div>
                <h2>Your Form Data</h2>
                <p>First Name: { user['firstName'] }</p>
                <p>Last Name: { user['lastName'] }</p>
                <p>Email: { user['email'] }</p>
                <p>Password: { user['password'] }</p>
                <p>Confirm Password: { user['confirmPassword'] }</p>
            </div>
        </>
    )
}