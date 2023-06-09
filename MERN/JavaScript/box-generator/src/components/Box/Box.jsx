export default function Box (props) {
    const {color, size} = props.boxDimensions
    

    const boxStyle = {
        backgroundColor: color,
        height: size + "px",
        width: size + "px"
    }

    return (
        <div style={ boxStyle }></div>
    )
}