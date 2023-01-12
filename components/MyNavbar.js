import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Roboto_Mono } from "@next/font/google";

const mono = Roboto_Mono({ subsets: ['latin'] })

export default function MyNavbar() {
  return (
    <Navbar sticky='top'>
      <Container>
        <Nav />
        <Nav className={mono.className}>
          <Nav.Link href="#about-me">About Me</Nav.Link>
          <Nav.Link href="#my-works">My Works</Nav.Link>
          <Button variant="outline-secondary" href="#contact" className='ml-2'>
            Contact
          </Button>
        </Nav>
      </Container>
    </Navbar>
  )
}