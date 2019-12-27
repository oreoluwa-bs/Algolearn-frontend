import React from 'react';
import AuthContextProvider from './auth';
import CourseContextProvider from './course';
import ColorContextProvider from './colors';
import { config } from '../../config';

function RootContext(props) {
    const apiUrl = config.apiUrl;
    return (
        <AuthContextProvider apiUrl={apiUrl}>
            <CourseContextProvider apiUrl={apiUrl}>
                <ColorContextProvider>
                    {props.children}
                </ColorContextProvider>
            </CourseContextProvider>
        </AuthContextProvider>
    );
}

export default RootContext;
