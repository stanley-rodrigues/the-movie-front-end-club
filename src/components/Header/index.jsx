import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Logo from '../../assets/logo.png'
import { Container, Menu, Li } from './styles'

const Header = () => {
  const [changeBackground, setChangeBackground] = useState(false)
  const { pathname } = useLocation()
  // console.log(pathname)

  window.onscroll = () => {
    // console.log(window.scrollY)
    // console.log('estou descendo')
    // console.log(window.pageYOffset)
    if (!changeBackground && window.pageYOffset > 150) {
      setChangeBackground(true)
    }
    if (changeBackground && window.pageYOffset <= 150) {
      setChangeBackground(false)
    }
  }
  return (
    <Container changeBackground={changeBackground}>
      <img src={Logo} alt="logo-devMovies" />
      <Menu>
        <Li isActive={pathname === '/'}>
          <Link to="/">Home</Link>
        </Li>
        {/* <Li isActive={pathname.includes('filmes')}>
          <Link to="/filmes">Filmes</Link>
        </Li>
        <Li isActive={pathname.includes('series')}>
          <Link to="/series">Series</Link>
        </Li> */}
      </Menu>
    </Container>
  )
}

export default Header
