import styles from "./App.module.css"
import TodoContext from "./TodosContext"
import Todo from "./components/Todo"
import TodoForm from "./components/TodoForm"
import { v4 as uuidv4 } from 'uuid'
import { useState, useEffect, useReducer } from 'react'

export default function App() {

    const [todos, setTodos] = useState( () => {
        const localValue = localStorage.getItem("todos")
        if (localValue === null) return []

        return JSON.parse(localValue)
        }
    )

    useEffect( () => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos] ) 

    function reducer(todos, action){
        switch (action.type){
            case 'add_todo' : {
                return {
                    id: todos.id,
                    content: todos.content,
                    completed: todos.completed
                }
            }
            case 'checked' : {
                return {
                    ...todos,
                    completed: pass
                }
            }
        }
    }

    const handleNewTodo = () => {
        dispatchEvent({ type: 'add_todo' })
    }


    return (
        <>

        <TodoContext.Provider value={ { todos, setTodos } }>

            <TodoForm />

            <h1>Todo List</h1>

            { todos.map(_ => {
                return <Todo id={ uuidv4() } />
            }) }

        </TodoContext.Provider>

        </>
    )
}