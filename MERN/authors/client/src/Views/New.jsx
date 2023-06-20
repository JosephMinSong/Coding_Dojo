import styles from "../App.module.css"
import AuthorForm from "../Components/AuthorForm"

export default function New() {

    return(
        <div className={ styles.new_form }>
            <h2>Add an author</h2>
            <AuthorForm reqType = 'post'/>
        </div>
    )
}