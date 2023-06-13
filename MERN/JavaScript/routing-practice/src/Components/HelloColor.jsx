import { useParams } from "react-router-dom"

export default function HelloColor() {

    const {color1, color2} = useParams()

    const wordColor = {
        fontSize : '2rem',
        color : `${color1}`
    }

    const backgroundColor = {
        display: 'flex',
        justifyContent : 'center',
        padding: '10rem',
        width : '100vw',
        border : '1px solid black',
        backgroundColor : `${color2}`
    }

    return (
        <div style={ backgroundColor }>
            <p style={ wordColor }> The word is hello </p>
        </div>
    )
}