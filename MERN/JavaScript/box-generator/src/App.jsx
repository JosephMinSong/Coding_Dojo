import styles from "./App.module.css"
import { useState } from 'react'
import Box from "./components/Box/Box"
import ColorForm from "./components/ColorForm/ColorForm"

export default function App() {
    // Set color to a blank string until filled
    const [boxes, setBoxes] = useState([
        {color : "", size : ""}
    ])

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
            boxes.map( c => <Box boxDimensions={ c } /> )
        }
        </>
    )
}