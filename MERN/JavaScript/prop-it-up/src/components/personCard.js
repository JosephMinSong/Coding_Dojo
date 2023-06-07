import { useState } from 'react'


function PersonCard (props) {
    const { firstname, lastname, age, hairColor } = props
    
    const [personAge, setPersonAge] = useState(age)

    const handleClick = () => {
        setPersonAge(personAge + 1)
    }

    return (
        <div style = {{backgroundColor : "blanchedalmond"}}>
            <h1> {lastname}, {firstname} </h1>
            <p>Age: {personAge} </p>
            <p>Hair Color: {hairColor} </p>
            <button onClick = { handleClick }> Birthday Button for {firstname} {lastname} </button>
        </div>
    )
}

export default PersonCard