import { useTodoContext } from '../TodosContext'
import { ACTIONS } from "../App"
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'

export default function TodoForm() {

    const { updateTodo } = useTodoContext()

    const [newTodo, setNewTodo] = useState('')

    const handleChange = (e) => {
        setNewTodo(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!newTodo){
            return
        }

        updateTodo( { type : ACTIONS.ADD_TODO, payload : { id : uuidv4(), content : newTodo, completed: false } } )
        setNewTodo('')
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <h2> Add a todo item </h2>
                <input type='text' value={ newTodo } onChange={ handleChange }></input>
            </form>
        </>
    )
}