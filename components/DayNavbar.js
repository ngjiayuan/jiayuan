import { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { mono } from './Landing';
import { AuthenticationContext } from "../utils/auth/authentication.context";

export default function DayNavbar() {
  const { SignOut } = useContext(AuthenticationContext);
  const today = new Date().toDateString();

  return (
    <Navbar sticky='top' expand="lg">
      <Container className={mono.className}>
        <Navbar.Brand className='font-bold'>{today.substring(0, 3) + "," + today.substring(3, 11)}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='flex sm:justify-end'>
        <Nav>
          <Nav.Link href="#about-me">Market</Nav.Link>
          <Nav.Link href="#my-works">News</Nav.Link>
          <Button variant="outline-secondary" onClick={SignOut} className='xxs:mt-2 sm:ml-2 sm:mt-0'>
            Logout
          </Button>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}