import React, { Component, createContext } from 'react';
import axios from 'axios';
import { message } from 'antd';

export const AdminUserContext = createContext();

class AdminUserContextProvider extends Component {
    state = {
        usersNum: 0,
        reportedCoursesMain: [],
        response: {
            status: null,
            message: null
        }
    }

    getAllUsers = () => {
        axios.get(`${this.props.apiUrl}/auth/`).then((res) => {
            this.setState({
                usersNum: res.data.data.length
            })
        }).catch(() => {
        });
    }

    getReportedCourses = () => {
        axios.get(`${this.props.apiUrl}/admin/courses/reported`).then((res) => {
            // console.log(res.data);
            this.setState({
                reportedCoursesMain: res.data.data
            });
        }).catch(() => {
            this.setState({
                response: {
                    status: 'error',
                    message: 'Error occured! Try again later.'
                }
            });
        });
    }

    handleDeleteCourse = (id) => {
        axios.delete(`${this.props.apiUrl}/admin/course/${id}`, {
            headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
        }).then(() => {
            this.feedback({
                status: 'success',
                message: `Your course has been deleted!`
            });
            this.getCourses();
        }).catch(() => {
            this.setState({
                response: {
                    status: 'error',
                    message: 'Course could not be deleted. Try again later!'
                }
            });
            this.feedback(this.state.response);
        });
    }

    handleForgotPassword = (values) => {
        axios.post(`${this.props.apiUrl}/admin/forgotadminpassword`, {
            email: values.email,
        }).then(() => {
            this.feedback({
                status: 'info',
                message: 'Check your email for a confirmation!'
            });
        }).catch(() => {
            this.feedback({
                status: 'error',
                message: 'Email address provided, does not have an account!'
            });
        });
    }

    feedback = (response) => {
        if (response.status === 'success') {
            message.success(response.message);
        }
        if (response.status === 'error') {
            message.error(response.message);
        }
        if (response.status === 'info') {
            message.info(response.message);
        }
    }
    render() {
        return (
            <AdminUserContext.Provider value={{
                ...this.state,
                getAllUsers: this.getAllUsers,
                getReportedCourses: this.getReportedCourses,
                handleForgotPassword: this.handleForgotPassword,
            }}>
                {this.props.children}
            </AdminUserContext.Provider>
        );
    }
}

export default AdminUserContextProvider;