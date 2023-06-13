import { useTodoContext } from "../TodosContext"
import { ACTIONS } from "../App"

export default function Todo( { todo } ) {

    const { updateTodo } = useTodoContext()

    const handleToggle = (e) => {
        updateTodo( { type: ACTIONS.TOGGLE_TODO, payload : { id : todo.id, completed : e.target.checked } } )
    }

    const handleDelete = () => {
        updateTodo( {type: ACTIONS.DELETE_TODO, payload : todo.id} )
    }

    const strike = {
        textDecoration: 'line-through'
    }

    return (
        <li key={ todo.id } display="flex" style= { todo.completed ? strike : null }>
            <input 
            type="checkbox"
            checked={ todo.completed }
            onChange={ handleToggle }
            />
            { todo.content }
            <button onClick={ handleDelete }> Delete </button>
        </li>
    )
}