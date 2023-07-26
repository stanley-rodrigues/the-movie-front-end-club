import { getImages } from '../../services/utils/getImages'
import { Container } from './styles'
const Card = ({ nameSeries, item }) => {
  return (
    <Container>
      <img src={getImages(item.poster_path || item.profile_path || '')} />

      <h3> {item.original_title || item.original_name || item.name || ''}</h3>
    </Container>
  )
}

export default Card
