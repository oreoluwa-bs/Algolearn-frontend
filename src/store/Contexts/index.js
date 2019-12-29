import React from 'react';
import AuthContextProvider from './auth';
import CourseContextProvider from './course';
import ColorContextProvider from './colors';
import { config } from '../../config';
import AdminUserContextProvider from './admin';

function RootContext(props) {
    const apiUrl = config.apiUrl;
    return (
        <AuthContextProvider apiUrl={apiUrl}>
            <AdminUserContextProvider apiUrl={apiUrl}>
                <CourseContextProvider apiUrl={apiUrl}>
                    <ColorContextProvider>
                        {props.children}
                    </ColorContextProvider>
                </CourseContextProvider>
            </AdminUserContextProvider>
        </AuthContextProvider>
    );
}

export default RootContext;
