import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = {
        auth: {
            firstname: 'John',
            lastname: 'Doe',
            email: 'john.d@gmail.com',
            userId: '12gh13ki',
            role: 'tutor',
            enrolledCourses: [{
                id: '1',
                isCompleted: true
            }, {
                id: '4',
                isCompleted: false
            }],
            createdCourses: [{
                id: '2'
            }]
        },
        authError: null
    }
    render() {
        return (
            <AuthContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}

export default AuthContextProvider;