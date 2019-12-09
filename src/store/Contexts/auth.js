import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = {
        auth: {
            firstname: 'John',
            lastname: 'Doe',
            email: 'john.d@gmail.com',
            userId: '12gh13ki',
            role: 'student',
            enrolledCourses: [],
        }
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