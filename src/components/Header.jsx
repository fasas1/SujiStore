import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaUser, FaShoppingCart} from 'react-icons/fa';
import  LinkContainer from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
            <LinkContainer to="/">
              <Nav.Link >Home</Nav.Link>
            </LinkContainer>
           
            <LinkContainer to="/">
           
          <Navbar.Brand >Sujistore</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <LinkContainer to="/cart">
            <Nav.Link >
          
                <FaShoppingCart />  Cart
                </Nav.Link>  
             
              </LinkContainer >
              <LinkContainer to="/cart">
              <Nav.Link >
                <FaUser />      User
             
              </Nav.Link>   
              </LinkContainer >  
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
    </header>
  )
}

export default Header
