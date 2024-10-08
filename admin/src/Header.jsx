import React from 'react';
import { Navbar, Nav, Dropdown, Image, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="w-100">
      <Container fluid>
        <Navbar.Brand href="#">Online Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='mx-auto'>
          <Nav.Link className='' >
            <Link to='/addproduct'>
          <i className="bi bi-plus-circle me-2"></i>
          Add Product
          </Link>
        </Nav.Link>
        <Nav.Link  >
          <Link to='/listproduct'>
        <i className="bi bi-box-seam me-2"></i>
          All Product
          </Link>
        </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Dropdown align="end">
              <Dropdown.Toggle variant="light" id="dropdown-basic" className="d-flex align-items-center">
                <Image 
                  src="https://via.placeholder.com/30" // Replace with actual image
                  roundedCircle
                  width={30} 
                  height={30} 
                  className="me-2"
                  alt="Profile"
                />
                <span className="text-dark">Username</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as="button">Profile</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as="button">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
