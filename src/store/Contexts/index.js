import React from 'react';
import AuthContextProvider from './auth';
import CourseContextProvider from './course';
import { config } from '../../config';

function RootContext(props) {
    const apiUrl = config.apiUrl;
    return (
        <AuthContextProvider apiUrl={apiUrl}>
            <CourseContextProvider apiUrl={apiUrl}>
                {props.children}
            </CourseContextProvider>
        </AuthContextProvider>
    );
}

export default RootContext;
