import React from 'react';
import AuthContextProvider from './auth';

function RootContext(props) {
    return (
        <AuthContextProvider>
            {props.children}
        </AuthContextProvider>
    );
}

export default RootContext;
