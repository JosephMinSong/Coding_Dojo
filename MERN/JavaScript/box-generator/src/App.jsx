import styles from "./App.module.css"
import { useState } from 'react'
import Box from "./components/Box/Box"
import ColorForm from "./components/ColorForm/ColorForm"

export default function App() {
    // Set color to a blank string until filled
    const [color, setColor] = useState("")

    // Array of colors for each new box
    let boxes = []

    // Function to change color and then to add it to the boxes array
    const changeColor = (newColor) => {
        setColor(newColor)
        boxes.push(color)
    }

    return (
        <>
        {/* **********************Display form to change color************************* */}
        <ColorForm onChangeColor = { changeColor } />

        {/* **********************Map function to display the boxes******************* */}
        {
            boxes.map( c => <Box boxColor= { c } /> )
        }
        </>
    )
}