import axios from 'axios'

const api = axios.create({
  baseURL: 'https://argysapi.azurewebsites.net/api',
  timeout: 10000,
})

export default api
