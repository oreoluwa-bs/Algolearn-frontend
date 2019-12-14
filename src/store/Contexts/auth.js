import React, { Component, createContext } from 'react';
import axios from 'axios';
import { message } from 'antd';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    initAuth = localStorage.getItem('auth') || null;
    state = {
        auth: JSON.parse(this.initAuth),
        response: {
            status: null,
            message: null
        }
    }

    handleLogout = () => {
        localStorage.removeItem('auth');
        this.setState({
            auth: null
        });
        this.feedback({
            status: 'success',
            message: `You have logged out successfully!`
        });
        axios.defaults.headers.common['Authorization'] = null;
    }

    handleLogin = (credentials) => {
        axios.post(`${this.props.apiUrl}/auth/login`, {
            email: credentials.email,
            password: credentials.password
        }).then((res) => {
            this.setState({
                auth: res.data.auth
            });
            localStorage.setItem('auth', JSON.stringify(res.data.auth));
            localStorage.setItem('token', res.data.token);
            this.feedback({
                status: 'success',
                message: `Hello, ${this.state.auth.firstname}!`
            });
        }).catch(() => {
            this.setState({
                response: {
                    status: 'error',
                    message: 'Incorrect email or password'
                }
            });
            this.feedback(this.state.response);
        });
    }

    handleCreateAccount = (credentials) => {
        axios.post(`${this.props.apiUrl}/auth/create-user`, {
            email: credentials.email,
            password: credentials.password,
            firstname: credentials.firstname,
            lastname: credentials.lastname,
            role: credentials.role.toLowerCase(),
        }).then(() => {
            this.feedback({
                status: 'success',
                message: `Your account has been created!`
            });
        }).catch(() => {
            this.setState({
                response: {
                    status: 'error',
                    message: 'User account could not be created'
                }
            });
            this.feedback(this.state.response);
        });
    }

    handleAccountUpdate = (id, credentials) => {
        axios.put(`${this.props.apiUrl}/auth/${id}`, {
            email: credentials.email,
            password: credentials.password,
            firstname: credentials.firstname,
            lastname: credentials.lastname,
            role: credentials.role.toLowerCase(),
        }, {
            headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
        }).then((res) => {
            this.setState({
                auth: {
                    ...JSON.parse(localStorage.getItem('auth')),
                    ...{
                        email: credentials.email,
                        password: credentials.password,
                        firstname: credentials.firstname,
                        lastname: credentials.lastname,
                        role: credentials.role.toLowerCase(),
                    }
                },
                response: {
                    status: res.data.status,
                    message: 'Your account has been updated'
                }
            });
            this.feedback(this.state.response);
        }).catch(() => {
            this.setState({
                response: {
                    status: 'error',
                    message: 'User account cannot be updated'
                }
            });
        });
    }

    handleAccountDelete = (id) => {
        axios.delete(`${this.props.apiUrl}/auth/${id}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then((res) => {
            this.setState({
                response: {
                    status: res.data.status,
                    message: res.data.message
                }
            });
            this.feedback(this.state.response);
        }).catch(() => {
            this.setState({
                response: {
                    status: 'error',
                    message: 'Your account was not deleted! Try again later'
                }
            });
            this.feedback(this.state.response);
        });
    }

    feedback = (response) => {
        console.log(response)
        if (response.status === 'success') {
            message.success(response.message);
        }
        if (response.status === 'error') {
            message.error(response.message);
        }
    }

    render() {
        return (
            <AuthContext.Provider value={{
                ...this.state,
                handleLogout: this.handleLogout,
                handleLogin: this.handleLogin,
                handleCreateAccount: this.handleCreateAccount,
                handleAccountUpdate: this.handleAccountUpdate,
                handleAccountDelete: this.handleAccountDelete
            }}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}

export default AuthContextProvider;