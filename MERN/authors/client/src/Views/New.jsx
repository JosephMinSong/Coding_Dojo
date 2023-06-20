import styles from "../App.module.css"
import AuthorForm from "../Components/AuthorForm"
import { createAuthor } from "../Services/AuthorServices"

export default function New() {

    return(
        <div className={ styles.new_form }>
            <h2>Add an author</h2>
            <AuthorForm 
                authorData={ {name : ''} }
                service={ createAuthor }
            />
        </div>
    )
}