import styles from "../App.module.css"
import NotTheDroids from "../imgs/NotTheDroids.png"
import { Link } from "react-router-dom"

export default function ErrorPage() {
    return (
        <div className={ styles.error_container }>
            <img src={ NotTheDroids } />
            <br/>
            <Link to="/" >Go back home</Link>
        </div>
    )
}