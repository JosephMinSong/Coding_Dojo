export default function Box (props) {
    // retreive color and size from props => these match the keys that boxDimensions has
    // props comes in as an object with key of color and size
    const {color, size} = props
    
    // set internal styling so that we can use the values from props
    const boxStyle = {
        backgroundColor: color,
        height: size + "px",
        width: size + "px"
    }

    return (
        <div style={ boxStyle }></div>
    )
}