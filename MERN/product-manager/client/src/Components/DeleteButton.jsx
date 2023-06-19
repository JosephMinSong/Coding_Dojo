import { deleteButton } from "../Services/ProductServices"

export default function DeleteButton( { id, successFunction } ) {

    const handleDelete = () => {
        deleteButton(id)
            .then(res => successFunction())
            .catch(err => console.log(err))
    }

    return (
        <button onClick={ handleDelete }>
            Delete
        </button>
    )
}