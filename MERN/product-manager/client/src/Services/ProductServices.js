import axios from 'axios'

const http = axios.create({ baseURL : 'http://localhost:8000/api/products' })

// Get all
export const getAllProducts = async () => http.get()

// Get one
export const getOneProduct = async (id) => http.get(`/${id}`)

// Create
export const createProduct = async (productData) => http.post(`/`, productData)

// Update
export const editProduct = async (id, productData) => http.put(`/${id}` , productData)

// Delete
export const deleteButton = async (id) => http.delete(`/${id}`)