import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

export default function Number() {

    const { number } = useParams()

    return (
        <>
        <h1> The number is { number } </h1>
        <Link to="/">Go back home</Link>
        </>
    )
}