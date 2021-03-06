import React, { Component, createContext } from 'react';
import axios from 'axios';
import { message } from 'antd';

export const CourseContext = createContext();

class CourseContextProvider extends Component {
    state = {
        courses: [],
        currCourse: null,
        response: {
            status: null,
            message: null
        }
    }

    componentDidMount() {
        this.getCourses();
    }

    getCourses = () => {
        axios.get(`${this.props.apiUrl}/course/`).then((res) => {
            this.setState({
                courses: res.data
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

    getCourse = (id) => {
        axios.get(`${this.props.apiUrl}/course/${id}`).then((res) => {
            this.setState({
                currCourse: res.data
            })
        }).catch(() => {

        });
    }

    // Course
    handleCreateCourse = (values) => {
        axios.post(`${this.props.apiUrl}/course/create-course`, {
            title: values.title,
            description: values.description,
        }, {
            headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
        }).then((res) => {
            localStorage.setItem('auth', JSON.stringify({
                ...JSON.parse(localStorage.getItem('auth')),
                ...{
                    createdCourses: [...JSON.parse(localStorage.getItem('auth')).createdCourses, { _id: res.data.data }]
                }
            }));
            this.feedback({
                status: 'success',
                message: `Your course has been created!`
            });
            this.getCourses();
        }).catch(() => {
            this.setState({
                response: {
                    status: 'error',
                    message: 'Course could not be created'
                }
            });
            this.feedback(this.state.response);
        });
    }

    handleDeleteCourse = (id) => {
        axios.delete(`${this.props.apiUrl}/course/${id}`, {
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


    handleEditCourse = (id, values) => {
        axios.put(`${this.props.apiUrl}/course/${id}`, {
            title: values.title,
            description: values.description,
        }, {
            headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
        }).then(() => {
            this.feedback({
                status: 'success',
                message: `Your course has been edited!`
            });
            this.getCourses();
        }).catch(() => {
            this.setState({
                response: {
                    status: 'error',
                    message: 'Course could not be updated. Try again later!'
                }
            });
            this.feedback(this.state.response);
        });
    }


    // Lesson
    handleCreateLesson = async (id, values) => {
        axios.post(`${this.props.apiUrl}/course/${id}/create-lesson`, {
            title: values.title,
            vidData: values.vidData,
            textContent: values.content,
            references: values.references,
        }, {
            headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
        }).then(() => {
            this.feedback({
                status: 'success',
                message: `Your lesson has been created!`
            });
            this.getCourses();
        }).catch(() => {
            this.setState({
                response: {
                    status: 'error',
                    message: 'Lesson could not be created'
                }
            });
            this.feedback(this.state.response);
        });
    }

    handleEditLesson = async (courseId, lessonId, values) => {
        axios.put(`${this.props.apiUrl}/course/${courseId}/${lessonId}`, {
            title: values.title,
            vidData: values.vidData,
            textContent: values.content,
            references: values.references,
        }, {
            headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
        }).then((res) => {
            this.getCourses();
            this.feedback({
                status: 'success',
                message: `Your lesson has been edited!`
            });
        }).catch(() => {
            this.setState({
                response: {
                    status: 'error',
                    message: 'Lesson could not be edited'
                }
            });
            this.feedback(this.state.response);
        });
    }

    handleDeleteLesson = (courseId, lessonId) => {
        axios.delete(`${this.props.apiUrl}/course/${courseId}/${lessonId}`, {
            headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
        }).then((res) => {
            this.getCourses();
            this.feedback({
                status: 'success',
                message: `Your lesson has been deleted!`
            });
        }).catch(() => {
            this.setState({
                response: {
                    status: 'error',
                    message: 'lesson could not be deleted'
                }
            });
            this.feedback(this.state.response);
        });
    }


    // Test
    handleCreateTest = (id, values) => {
        axios.post(`${this.props.apiUrl}/course/${id}/create-test`, {
            question: values.question,
            answer: values.correctOption,
            options: values.options,
        }, {
            headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
        }).then((res) => {
            this.feedback({
                status: 'success',
                message: `Your test has been created!`
            });
            this.getCourses();
        }).catch(() => {
            this.setState({
                response: {
                    status: 'error',
                    message: 'Test could not be created'
                }
            });
            this.feedback(this.state.response);
        });
    }

    handleEditTest = (courseId, testId, values) => {
        axios.put(`${this.props.apiUrl}/course/${courseId}/test/${testId}`, {
            question: values.question,
            answer: values.correctOption,
            options: values.options,
        }, {
            headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
        }).then((res) => {
            this.getCourses();
            this.feedback({
                status: 'success',
                message: `Your test has been edited!`
            });
        }).catch(() => {
            this.setState({
                response: {
                    status: 'error',
                    message: 'Test could not be edited'
                }
            });
            this.feedback(this.state.response);
        });
    }

    handleDeleteQuestion = (courseId, testId) => {
        axios.delete(`${this.props.apiUrl}/course/${courseId}/test/${testId}`, {
            headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
        }).then((res) => {
            this.getCourses();
            this.feedback({
                status: 'success',
                message: `Your question has been deleted!`
            });
        }).catch(() => {
            this.setState({
                response: {
                    status: 'error',
                    message: 'Question could not be deleted'
                }
            });
            this.feedback(this.state.response);
        });
    }

    handleRateCourse = (id, values) => {
        axios.post(`${this.props.apiUrl}/course/${id}/rate`, {
            rating: values
        }, {
            headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
        }).then(() => {
            this.getCourses();
        }).catch(() => {
        });
    }

    handleFlagCourse = (values) => {
        axios.post(`${this.props.apiUrl}/course/${values.courseId}/flag`, {
            courseId: values.courseId,
            reason: values.reason,
            title: values.title,
            reporterId: values.reporterId,
            reporterName: values.reporterName,
            reportedDate: Date(Date.now()).toString(),
        }, {
            headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
        }).then(() => {
            this.feedback({
                status: 'info',
                message: `Thank you for your feedback!`
            });
        }).catch(() => {
            this.feedback({
                status: 'error',
                message: `Course could not be reported right now. Try again later!`
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
            <CourseContext.Provider value={{
                ...this.state,
                getCourses: this.getCourses,
                getCourse: this.getCourse,

                // Course
                handleCreateCourse: this.handleCreateCourse,
                handleDeleteCourse: this.handleDeleteCourse,
                handleEditCourse: this.handleEditCourse,

                // Lesson
                handleCreateLesson: this.handleCreateLesson,
                handleEditLesson: this.handleEditLesson,
                handleDeleteLesson: this.handleDeleteLesson,

                // Test
                handleCreateTest: this.handleCreateTest,
                handleEditTest: this.handleEditTest,
                handleDeleteQuestion: this.handleDeleteQuestion,

                // Rate
                handleRateCourse: this.handleRateCourse,

                // Flag
                handleFlagCourse: this.handleFlagCourse,
            }}>
                {this.props.children}
            </CourseContext.Provider>
        );
    }
}

export default CourseContextProvider;