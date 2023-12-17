import React from 'react';
import { Container, NavDropdown, Navbar, Nav, Collapse } from 'react-bootstrap';
import SideBar from '../../components/sideBar/SideBar';

const DashboardLayout = ({children}) => {
    return (
        <>
        <Navbar className="bg-body-tertiary">
        <Container className=''>
          <Navbar.Brand href="#home">
            <img
              src="src\assets\images\Screenshot_20231215_085833.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <button type='submit' className=''>
              hi
            </button>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <SideBar>
      </SideBar>
    <Container>
    {children}
    </Container>
        </>
    );
}

export default DashboardLayout;
