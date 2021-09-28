import Menu from './menu'

import { Container } from 'react-bootstrap'

const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <Container>
        <main>{children}</main>
      </Container>
    </>
  )
}


export default Layout