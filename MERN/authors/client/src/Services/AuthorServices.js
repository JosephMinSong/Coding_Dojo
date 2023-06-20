import axios from 'axios'

const http = axios.create({ baseURL : 'http://localhost:8000/api/authors' })

// Get all
export const getAll = async () => http.get()

// Get one
export const getOneAuthor = async (id) => http.get(`/${id}`)

// Create
export const createAuthor = async (authorData) => http.post(`/`, authorData)

// Update
export const updateAuthor = async (id, authorData) => http.put(`/${id}` , authorData)

// Delete 
export const deleteAuthor = async(id) => http.delete(`/${id}`)