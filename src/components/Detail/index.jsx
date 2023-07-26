import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Slider from '../../components/Slider'
import {
  getMovieCredits,
  getMovieDetail,
  getMovieSimilar,
  getMovieTrailers
} from '../../services/getData'
import { getImages } from '../../services/utils/getImages'
import Credits from '../Credits'
import SpanGenres from '../SpanGenres'
import { Container, Background, Cover, Info, ContainerMovies } from './styles'
const Detail = () => {
  const { id } = useParams()
  const [movieSimilar, setMovieSimilar] = useState()
  const [movieCredits, setMovieCredits] = useState()
  const [movieDetail, setMovieDetail] = useState()
  const [movieTrailers, setMovieTrailers] = useState()

  useEffect(() => {
    const GetAllData = async () => {
      Promise.all([
        getMovieSimilar(id),
        getMovieCredits(id),
        getMovieDetail(id),
        getMovieTrailers(id)
      ])
        .then(([movieSimilar, movieCredits, movieDetail, movieTrailers]) => {
          setMovieSimilar(movieSimilar)
          setMovieCredits(movieCredits)
          setMovieDetail(movieDetail)
          setMovieTrailers(movieTrailers)
        })
        .catch((error) => console.error(error))
    }
    GetAllData()
  }, [])
  return (
    <>
      {movieDetail && (
        <>
          <Background image={getImages(movieDetail.backdrop_path)} />

          <Container>
            <Cover>
              <img src={getImages(movieDetail.poster_path)} />
            </Cover>
            <Info>
              <h2>{movieDetail.title}</h2>
              <SpanGenres genres={movieDetail.genres} />
              <p>{movieDetail.overview}</p>
              <div>
                <Credits credits={movieCredits} />
              </div>
            </Info>
          </Container>
          <ContainerMovies>
            {movieTrailers &&
              movieTrailers.map((video) => (
                <div key={video.id}>
                  <h4>{video.name}</h4>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title="Youtube Video Player"
                    height="500px"
                    width="100%"
                  ></iframe>
                </div>
              ))}
          </ContainerMovies>
          {movieSimilar && (
            <Slider info={movieSimilar} title={'Filmes Similares'} />
          )}
        </>
      )}
    </>
  )
}

export default Detail
