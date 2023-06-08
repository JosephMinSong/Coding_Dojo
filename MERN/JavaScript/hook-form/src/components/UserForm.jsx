import { useState, useSyncExternalStore } from 'react'
import styles from './UserForm.module.css'

export default function UserForm () {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const createUser = (e) => {
        e.preventDefault()

        const newUser = { firstname, lastname, email, password }
        console.log(newUser)
        setFirstname("")
        setLastname("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }

    return (
        <>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label>
                    <input type='text' value={ firstname } onChange={ (e) => setFirstname(e.target.value) } />
                </div>

                <div>
                    <label>Last Name: </label>
                    <input type='text' value={ lastname } onChange={ (e) => setLastname(e.target.value) } />
                </div>

                <div>
                    <label>Email: </label>
                    <input type='email' value={ email } onChange={ (e) => setEmail(e.target.value) } />
                </div>

                <div>
                    <label>Password: </label>
                    <input type='text' value={ password } onChange={ (e) => setPassword(e.target.value) } />
                </div>

                <div>
                    <label>Confirm Password: </label>
                    <input type='text' value={ confirmPassword } onChange={ (e) => setConfirmPassword(e.target.value) } />
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