import React, { useEffect, useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import AdminTable from '../../components/tables/adminTable/AdminTable';
import RawTable from '../../components/tables/adminTable/RawTable';
import { Container } from 'react-bootstrap';


const AdminPage = () => {

    return (
        
        <>
        <DashboardLayout>
            <AdminTable></AdminTable>
        </DashboardLayout>
        </>

    );
}

export default AdminPage;
