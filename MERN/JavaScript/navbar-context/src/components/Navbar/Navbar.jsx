import styles from "./Navbar.module.css"
import { useUserContext } from "../Wrapper/Wrapper"

export default function Navbar () {

    // we have access to user from our own hook called useUserContext that we imported
    const { user } = useUserContext()

    return (
        <div className={ styles.navbar }>
            { user && <h1> Hello, { user }! </h1>}
        </div>
    )
}