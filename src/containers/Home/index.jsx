import { useState } from 'react'

import api from '../../services/api'
import { Background } from './styles'

const Home = () => {
  const [movie, setMovie] = useState()
  const GetMovies = async () => {
    const data = await api.get('/movie/popular')
    setMovie(data.data.results[1])
    console.log(movie)
  }

  GetMovies()
  return (
    <Background
      img={
        'https://image.tmdb.org/t/p/original/4CWoalqAsRzXD9AFbByD1KnH40E.jpg'
      }
    >
      <h1>{movie}</h1>
      <p>essa é a Home</p>
    </Background>
  )
}

export default Home
