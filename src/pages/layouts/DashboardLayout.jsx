import React from 'react';
import { Container, } from 'react-bootstrap';
import SideBar from '../../components/sideBar/SideBar';
import NavBar from '../../components/navBar/NavBar';

const DashboardLayout = ({children}) => {
    return (
        <>
        
      <NavBar></NavBar>
      <SideBar>
      </SideBar>
    <Container>
    {children}
    </Container>
        </>
    );
}

export default DashboardLayout;
