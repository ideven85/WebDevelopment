import React from "react";
import { Link, NavLink } from "react-router-dom";
import {Navbar,Nav,Container} from 'react-bootstrap';
const activeStyle = {
    color: "purple",
  };
  
  export default function Header() {
    return (
      <header>
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt="logo"
                src="/images/logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
             Home
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link as={NavLink} activestyle={activeStyle} to="/">
                Home
              </Nav.Link>
            <Nav.Link as={NavLink} activestyle={activeStyle} to="/shoes">
                Shoes
              </Nav.Link>
            
            <Nav.Link as={NavLink} activestyle={activeStyle} to="/cart">
                Cart
              </Nav.Link>
              </Nav>
                          </Navbar.Collapse>
          </Container>
        </Navbar>
          
          
        
      </header>
    );
  }
  