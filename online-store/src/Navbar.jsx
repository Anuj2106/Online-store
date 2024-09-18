import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
function BasicExample() {
  const[menu,setMenu]=useState("shop");
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
              <Nav.Link onClick={()=>{setMenu("shop")}} > <Link to='/' > Shop</Link> {menu==="shop"?<hr/>:<></>}</Nav.Link>
              <Nav.Link onClick={()=>{setMenu("men")}} ><Link to='/men'>Men</Link> {menu==="men"?<hr/>:<></>} </Nav.Link>
              <Nav.Link onClick={()=>{setMenu("women")}} > <Link to='/women'>Women</Link> {menu==="women"?<hr/>:<></>}</Nav.Link>
              <Nav.Link  onClick={()=>{setMenu("kids")}}> <Link  to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>} </Nav.Link>
              {/* <Nav.Link > Electronics</Nav.Link> */}
            </Nav>
            <Nav.Link> <button className='btn btn-dark p-1 mx-1'> <Link to='/login'>Login</Link> </button></Nav.Link> 
            <Nav.Link> <button className='btn btn-dark px-3 ms-1'> <Link to='/cart'> <IoCartOutline/></Link></button></Nav.Link>
       
          

           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default BasicExample;