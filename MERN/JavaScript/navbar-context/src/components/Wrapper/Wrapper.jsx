import { useContext, createContext } from 'react'

// creating context for our application
const UserContext = createContext()

// creating our own hook that calls a function to referrence it to our context that we created
export const useUserContext = () => useContext(UserContext)

export default UserContext





// Another way to do it if we know we only have one context for our webpage

// export function Wrapper( { children } ) {

//     const [user, setUser] = useState("Hello")

//     return (
//         <WrapperContext.Provider value={ { user, setUser } }>
//             { children }
//         </WrapperContext.Provider>
//     )
// }

// export default UserContext