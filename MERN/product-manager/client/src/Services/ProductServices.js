import axios from 'axios'

const http = axios.create({ baseURL : 'http://localhost:8000/api/products' })

export const getAllProducts = async () => http.get()

export const getOneProduct = async (id) => http.get(`/${id}`)

export const createProduct = async (productData) => http.post(`/`, productData)

export const editProduct = async (id, productData) => http.put(`/${id}` , productData)

export const deleteButton = async (id) => http.delete(`/${id}`)