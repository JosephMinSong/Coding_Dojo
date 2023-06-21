import styles from "../App.module.css"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import io from 'socket.io-client'

export default function Room1() {

    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])

    const [ socket ] = useState( () => io(':8000') )
    const { id } = useParams()

    useEffect( () => {

        socket.emit('join', id)

        socket.on('incomingMessage', data => {
            setMessages(current => [...current, data])
        })

        return () => socket.removeAllListeners() // socket.off() is better
    }, [] )

    const handleSubmit = (e) => {
        e.preventDefault()
        socket.emit('sendMessage', { message, id })
        setMessage('')
    }

    return (
        <>
            <h1>Socket Test</h1>

            <div className={ styles.chat }>
                {messages.map(message => {
                    return <p> {message} </p>
                })}
            </div>

            <form onSubmit={ handleSubmit }>
                <textarea value={ message } onChange={ (e) => setMessage(e.target.value) }></textarea>
                <button>Send message</button>
            </form>
        </>
    )
}