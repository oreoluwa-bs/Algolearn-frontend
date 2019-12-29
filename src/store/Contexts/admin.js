import React, { Component, createContext } from 'react';
import axios from 'axios';
import { message } from 'antd';

export const AdminUserContext = createContext();

class AdminUserContextProvider extends Component {
    state = {
        reportedCoursesMain: [],
        response: {
            status: null,
            message: null
        }
    }

    getReportedCourses = () => {
        axios.get(`${this.props.apiUrl}/admin/courses/reported`).then((res) => {
            console.log(res.data);
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

    feedback = (response) => {
        if (response.status === 'success') {
            message.success(response.message);
        }
        if (response.status === 'error') {
            message.error(response.message);
        }
    }
    render() {
        return (
            <AdminUserContext.Provider value={{
                ...this.state,
                getReportedCourses: this.getReportedCourses,

            }}>
                {this.props.children}
            </AdminUserContext.Provider>
        );
    }
}

export default AdminUserContextProvider;