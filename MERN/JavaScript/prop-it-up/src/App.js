import PersonCard from "./components/personCard"

const people = [
    {firstname : "Jane", lastname : "Doe", age : 45, hairColor : "Black"},
    {firstname : "John", lastname : "Smith", age : 88, hairColor : "Brown"},
    {firstname : "Millard", lastname : "Fillmore", age : 50, hairColor : "Brown"},
    {firstname : "Maria", lastname : "Smith", age : 45, hairColor : "Brown"}
]

export default function App () {
    return (
        <>
        { people.map(person =>
            <PersonCard 
                firstname = { person.firstname } 
                lastname = { person.lastname } 
                age = { person.age } 
                hairColor = {person.hairColor} 
            />) 
        }
        </>
    )
}