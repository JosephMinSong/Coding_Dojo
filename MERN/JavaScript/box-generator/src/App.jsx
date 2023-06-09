import { useState } from 'react'
import Box from "./components/Box/Box"
import ColorForm from "./components/ColorForm/ColorForm"

export default function App() {
    // Set color to a blank string until filled
    const [boxes, setBoxes] = useState([])

    // Function to change color and then to add it to the boxes array
    const changeBox = (newBox) => {
        setBoxes(currentBoxes => [...currentBoxes, newBox])
    }

    return (
        <>
        {/* **********************Display form to change color************************* */}
        <ColorForm onNewBox = { changeBox } />

        {/* **********************Map function to display the boxes******************* */}
        {
            // for every object in the boxes array, we send the object into the Box child
            // so that the information can be access via boxDimensions.key
            // box here is a representation of each element inside boxes
            boxes.map( box => <Box color={ box.color } size={ box.size }/> )
        }
        </>
    )
}