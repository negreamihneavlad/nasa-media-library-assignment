import axios from 'axios'

export const http = axios.create({
  baseURL: `https://images-api.nasa.gov/`,
})
