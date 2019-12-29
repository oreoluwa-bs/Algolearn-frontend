import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import '../../styles/admin.css';
import { AdminUserContext } from '../../store/Contexts/admin';

const AdminIndex = () => {
    const { auth } = useContext(AdminUserContext);

    if (!auth) {
        return <Redirect to='/admin/login' />
    } else {
        return <Redirect to='/admin/dashboard' />
    }
}

export default AdminIndex;