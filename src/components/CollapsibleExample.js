import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Outlet } from "react-router-dom";
import handshake from "../images/handshake3.svg";
import LinkContainer from "react-router-bootstrap/LinkContainer"

import './CollapsibleExample.css';

function CollapsibleExample() {
  return (
    <>
      <Navbar variant={"light"} expand="lg" className='nav-space'>
      <LinkContainer to={`/`}>
        <Navbar.Brand id="brand"> 
        <img
                alt=""
                src={handshake}
                width="55"
                height="50"
                className="d-inline-block align-top"
              />{' '}
        Senior Services</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
              className="me-auto"
              style={{ minH: '150px' }}
              // navbarScroll
          >
            <NavLink className="link" activeStyle={{ fontWeight: 'bold' }} to={`/`}>Home</NavLink>
            <NavLink className="link" activeStyle={{ fontWeight: 'bold' }} to="/about" >About</NavLink>
            <NavLink className="link" activeStyle={{ fontWeight: 'bold' }} to="/events" >Events</NavLink>
            <NavLink className="link" activeStyle={{ fontWeight: 'bold' }} to="/connect">Connect with Us</NavLink>

          </Nav>

        </Navbar.Collapse>
        </Navbar>
        <div>
          <Outlet />
        </div>
    </> 
  );
}

export default CollapsibleExample;