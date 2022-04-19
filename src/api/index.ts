import axios from 'axios'

export const BASE_URL = 'https://kinopoisk.ru/api'

const api = axios.create({
  baseURL: BASE_URL,
})

export default api
