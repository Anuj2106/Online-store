import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoCartOutline } from "react-icons/io5";
function BasicExample() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          {/* <img
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> */}
            Online-Store 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto p-2">
              <Nav.Link href="#home">Shop</Nav.Link>
              <Nav.Link href="#link">Men</Nav.Link>
              <Nav.Link href="#link">Women</Nav.Link>
              <Nav.Link href="#link"> Kids</Nav.Link>
              <Nav.Link href="#link">Electronics</Nav.Link>
            </Nav>
            <Nav.Link> <button className='btn btn-dark p-1 mx-1'> Login</button></Nav.Link>
            <Nav.Link> <button className='btn btn-dark p-1 ms-2'>Sign-Up</button></Nav.Link>
            <Nav.Link> <button className='btn btn-dark p-1 ms-2'><IoCartOutline /></button></Nav.Link>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default BasicExample;