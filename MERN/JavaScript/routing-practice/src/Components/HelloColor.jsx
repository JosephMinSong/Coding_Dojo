import { useParams } from "react-router-dom"

export default function HelloColor() {

    const {variable, color1, color2} = useParams()

    const wordColor = {
        fontSize : '2rem',
        color : color1,
        padding: '10rem',
        backgroundColor: color2,
        border: '1px solid black'
    }

    return (
        <p style={ wordColor }> The { isNaN(variable) ? 'word' : 'number' } is { variable } </p>
    )
}