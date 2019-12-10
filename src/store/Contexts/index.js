import React from 'react';
import AuthContextProvider from './auth';
import CourseContextProvider from './course';

function RootContext(props) {
    return (
        <AuthContextProvider>
            <CourseContextProvider>
                {props.children}
            </CourseContextProvider>
        </AuthContextProvider>
    );
}

export default RootContext;
