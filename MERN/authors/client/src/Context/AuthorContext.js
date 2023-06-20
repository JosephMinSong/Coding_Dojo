import { createContext, useContext } from 'react'

const AuthorContext = createContext()

export const useAuthorContext = () => useContext(AuthorContext)

export default AuthorContext