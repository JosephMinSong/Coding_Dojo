import styles from './Main.module.css'

export default function Main(props) {
    return (
        <div class = { styles.main }>
            {props.children}
        </div>
    )
}