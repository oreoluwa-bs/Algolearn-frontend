import React, { Component, createContext } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    initAuth = localStorage.getItem('auth') || null;
    state = {
        auth: JSON.parse(this.initAuth),
        authError: null
    }

    handleLogout = () => {
        localStorage.removeItem('auth');
        this.setState({
            auth: null
        })
    }

    handleLogin = (credentials) => {
        axios.post(`http://localhost:5000/api/v1/auth/login`, {
            email: credentials.email,
            password: credentials.password
        }).then((res) => {
            this.setState({ auth: res.data.auth })
            localStorage.setItem('auth', JSON.stringify(res.data.auth));
        }).catch((err) => {
            this.setState({ authError: err });
        });
    }

    handleCreateAccount = (credentials) => {
        axios.post(`http://localhost:5000/api/v1/auth/create-user`, {
            email: credentials.email,
            password: credentials.password,
            firstname: credentials.firstname,
            lastname: credentials.lastname,
            role: credentials.role.toLowerCase(),
        }).then((res) => {
            this.setState({ auth: res.data.data })
            localStorage.setItem('auth', JSON.stringify(res.data.data));
        }).catch((err) => {
            this.setState({ authError: err });
        });
    }

    render() {
        return (
            <AuthContext.Provider value={{
                ...this.state,
                handleLogout: this.handleLogout,
                handleLogin: this.handleLogin,
                handleCreateAccount: this.handleCreateAccount
            }}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}

export default AuthContextProvider;