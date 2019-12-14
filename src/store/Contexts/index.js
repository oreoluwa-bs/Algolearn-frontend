import React from 'react';
import AuthContextProvider from './auth';
import CourseContextProvider from './course';

function RootContext(props) {
    const apiUrl = 'http://localhost:5000/api/v1';
    return (
        <AuthContextProvider apiUrl={apiUrl}>
            <CourseContextProvider apiUrl={apiUrl}>
                {props.children}
            </CourseContextProvider>
        </AuthContextProvider>
    );
}

export default RootContext;
