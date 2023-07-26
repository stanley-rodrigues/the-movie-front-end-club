import { useEffect, useState } from 'react'

import { getMovieTrailers } from '../../services/getData'
import { Background, Container } from './styles'
const Modal = ({ movieId, setShowModal }) => {
  const [movie, setMovie] = useState()
  useEffect(() => {
    const GetMovies = async () => {
      setMovie(await getMovieTrailers(movieId))
    }

    GetMovies()
  }, [])

  return (
    <Background onClick={() => setShowModal(false)}>
      {movie && (
        <Container>
          <iframe
            src={`https://www.youtube.com/embed/${movie.key}`}
            title="Youtube Video Player"
            height="500px"
            width="100%"
          ></iframe>
        </Container>
      )}
    </Background>
  )
}

export default Modal
