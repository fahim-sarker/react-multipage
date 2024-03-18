import React from 'react'
import "./menu.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Lg from "../../assets/logor.png"
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <>
      <Navbar expand="lg" className='menu-bg'>
        <Container id='navbar'>
          <Navbar.Brand href="#home">
            <img src={Lg} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/">home</Link>
              <Link to="/service">about</Link>
              <Link to="/feat">feature</Link>
              <Link to="/fahim">pricing</Link>
              <Link to="/price">faq</Link>
              <Link to="/razib">blog</Link>
            </Nav>
            <div className="menu-button">
                <Link to="team/">contact us</Link>
              </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Menu
