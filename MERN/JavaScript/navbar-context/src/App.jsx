import UserContext from "./components/Wrapper/Wrapper"
import Navbar from "./components/Navbar/Navbar"
import FormWrapper from "./components/FormWrapper/FormWrapper"
import { useState } from 'react'

export default function App () {

    const [user, setUser] = useState()

    return (

        // UserContext is from Wrapper, which has hook called UserContext that we created context for
        // createContext creates a component object that has a key of provider
        // Provider then is an object that has a key of value that is essentially props
        // All children of UserContext now have access to the value, which contains an object
        
        <UserContext.Provider value={ { user, setUser } }>
            <Navbar />
            <FormWrapper />
        </UserContext.Provider>
    )
}