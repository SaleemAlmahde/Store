import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <>
             <Navbar className="bg-body-tertiary">
        <Container>
          <Button>Brand link</Button>
        </Container>
      </Navbar>
        </>
    );
}

export default NavBar;
