import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'c596d4e91723ad1e6d5071fff187c5f0',
    language: 'pt-BR',
    page: 1
  }
})

export default api
