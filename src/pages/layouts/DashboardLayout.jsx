import React from 'react';
import { Container, NavDropdown, Navbar, Nav } from 'react-bootstrap';

const DashboardLayout = ({children}) => {
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
    <Container>
     {children}
    </Container>
        </>
    );
}

export default DashboardLayout;
