import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <>
             <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
        </>
    );
}

export default NavBar;
