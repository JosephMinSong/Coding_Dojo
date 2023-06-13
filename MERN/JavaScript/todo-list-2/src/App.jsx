import styles from "./App.module.css"
import TodoContext from "./TodosContext"
import Todo from "./components/Todo"
import TodoForm from "./components/TodoForm"
import { useEffect, useReducer } from 'react'

export const ACTIONS = {
    ADD_TODO : 'add_todo',
    TOGGLE_TODO : 'toggle_todo', 
    DELETE_TODO : 'delete_todo'
}

function reducer (todos, action) {
    switch (action.type){
        case ACTIONS.ADD_TODO : {
            return [...todos, action.payload]
        }
        case ACTIONS.TOGGLE_TODO : {
            return todos.map( todo => {
                if (todo.id === action.payload.id){
                    return {...todo, completed : action.payload.completed}
                }
                return todo
            } )
        }
        case ACTIONS.DELETE_TODO : {
            return todos.filter( todo => todo.id != action.payload  )
        }
    } 
}

export default function App() {

    const [todos, updateTodo] = useReducer(reducer, JSON.parse(localStorage.getItem("todos")) ?? [] )

    useEffect( () => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos] ) 

    return (
        <div className={ styles.app }>

        <TodoContext.Provider value={ { todos, updateTodo } }>

            <TodoForm />

            <h1>Todo List</h1>

            <ul>
                { todos.map(todo => {
                    return <Todo key={ todo.id } todo={ todo }/>
                }) }
            </ul>

        </TodoContext.Provider>

        </div>
    )
}