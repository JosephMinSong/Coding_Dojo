import { Link } from 'react-router-dom'

export default function Hello() {
    return (
        <>
        <p> The word is: hello </p>
        <Link to="/">Go back home</Link>
        </>
    )
}