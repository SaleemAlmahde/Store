import React, { useEffect, useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import AdminTable from '../../components/tables/adminTable/AdminTable';


const AdminDashboard = () => {

    return (
        
        <>
        <DashboardLayout>
            <AdminTable></AdminTable>
        </DashboardLayout>
        </>

    );
}

export default AdminDashboard;
