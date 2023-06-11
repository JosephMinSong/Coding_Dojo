import styles from "./App.module.css"
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function App() {
    // put into state a new todo item to be added to our todo list
    const [newTodo, setNewTodo] = useState("")

    // put into state a new list of todo items, getting the initial values from local storage
    const [todos, setTodos] = useState( () => {
        const localValue = localStorage.getItem("ITEMS")
        if (localValue == null) return []

        return JSON.parse(localValue)
    })

    // adds items into local storage whenever the todos list is changed
    useEffect( () => {
        localStorage.setItem("ITEMS", JSON.stringify(todos))
    }, [todos] )

    // on form submit handler
    const handleSubmit = (e) => {
        e.preventDefault()

        setTodos(current => ([...current, { id : uuidv4(), content : newTodo, completed : false} ]))
        setNewTodo("")
    }

    // on change input handler
    const handleChange = (e) => {
        setNewTodo(e.target.value)
    }

    // changing the checked item, taking in the todo item id and the changed value
    const toggleChecked = (id, completed) => {
        setTodos(current => {
            
            // map over the current todo items in the list
            // if the id matches the one that is changed, we change the completed value state
            return current.map(todo => {
                if (todo.id === id){
                    return {...todo, completed : completed}
                }

                //otherwise, we return the todo item unchanged
                return todo
            })
        })
    }


    // deleting the todo item, taking in the todo item id
    const handleDelete = (id) => {
        setTodos(current => {

            // we filter the list by checking each todo item id to see if it matches the one we want to delete
            return current.filter(todo => todo.id != id)
        })
    }

    return (

        <div className={ styles.todo_container }>
            
            <form className={ styles.todo_form } onSubmit={ handleSubmit }>

                <h1> To-Do List </h1>

                <input type="text" value={ newTodo } onChange={ handleChange }></input>

                <button className={ styles.add_button }>Add</button>

            </form>

            <div className={ styles.todo_list }>

                <ul>

                    {/* short circuit : if there's nothing in our todo list, we render "no todos" */}
                    { todos.length === 0 && "No Todos" }

                    {/* mapping over todo, we create a new li element with the todo info*/}
                    { todos.map( todo => {
                        return (
                            <li id={ todo.id }>

                                <input
                                    type="checkbox" 
                                    checked= { todo.completed }
                                    onChange={ e => toggleChecked(todo.id, e.target.checked) } 
                                />

                                { todo.content }

                                <button onClick={ () => handleDelete(todo.id) }>
                                    Delete
                                </button>
                            </li>
                        )
                    }) }
                </ul>

            </div>

        </div>

    )
}