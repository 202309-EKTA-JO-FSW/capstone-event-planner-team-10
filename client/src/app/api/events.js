import axios from "axios"

export const events = axios.create({ 
    baseURL: 'http://localhost:3001/user' 
})