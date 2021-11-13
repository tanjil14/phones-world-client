import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
  const { contexts } = useAuth();
  const defImg = 'https://randomuser.me/api/portraits/men/60.jpg';
  return (
    <>
      <Navbar className='header' variant="dark" sticky='top' collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/home"> <h2> Phone's World </h2></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-text-end fw-normal'>
            <Nav className="ms-auto ">
              <Nav.Link>
                <Link style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }} to='/home'>Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }} to='/allproducts'>All Products</Link>
              </Nav.Link>
            </Nav>
            {!contexts.user.email ? (
              <>
                {/* <Nav.Link as={NavLink} to="/signup" className="text-white">
                  Sign Up
                </Nav.Link> */}
                <Nav.Link as={NavLink} to="/login" className="text-white">
                  Login
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link
                  as={HashLink}
                  to="/dashboard"
                  className="text-white fw-bold"
                >
                  Dashboard
                </Nav.Link>
                <NavDropdown
                  title={
                    <img
                      style={{
                        width: "45px",
                        borderRadius: "50%",
                      }}
                      src={contexts.user.photoURL ? contexts.user.photoURL : defImg}
                      alt=""
                    />
                  }
                >
                  <div className="text-center">
                    <h6>{contexts.user.displayName}</h6>
                    <p className="m-0 mb-2">{contexts.user.email}</p>
                    <button onClick={contexts.logOut} className="btn btn-danger fw-bold">
                      Sign Out
                    </button>
                  </div>
                </NavDropdown>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;