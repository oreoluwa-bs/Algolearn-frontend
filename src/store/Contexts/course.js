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
            <CourseContext.Provider value={{
                ...this.state,
                getCourses: this.getCourses,
                getCourse: this.getCourse,
                handleCreateCourse: this.handleCreateCourse,
                handleDeleteCourse: this.handleDeleteCourse,
            }}>
                {this.props.children}
            </CourseContext.Provider>
        );
    }
}

export default CourseContextProvider;


// {
//     tests: [{
//         id: '21', question: `Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
//     Design, a design language for background applications, is refined by Ant UED Team. `,
//         answers: [
//             {
//                 value: 'a',
//                 text: 'tree',
//             },
//             {
//                 value: 'b',
//                 text: 'dda',
//             },
//             {
//                 value: 'c',
//                 text: 'tee',
//             },
//             {
//                 value: 'd',
//                 text: 'qda',
//             },
//         ],
//         answer: 'a'
//     }],
//     lessons: [{
//         id: '1',
//         title: 'Introduction',
//         videoUrl: 'hah',
//         textContent: `Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
//         Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
//         a design language for background applications, is refined by Ant UED Team. Ant Design, a
//         design language for background applications, is refined by Ant UED Team. Ant Design, a design
//         language for background applications, is refined by Ant UED Team. Ant Design, a design
//         language for background applications, is refined by Ant UED Team.`,
//         references: [{
//             id: 'laa',
//             url: 'www.google.com',
//             text: 'Google',
//         },
//         {
//             id: 'laa',
//             url: 'www.google.com',
//             // text: 'Google',
//         }],
//     },
//     {
//         id: '2',
//         title: 'Basics',
//         textContent: `Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
//         Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
//         a design language for background applications, is refined by Ant UED Team. Ant Design, a
//         design language for background applications, is refined by Ant UED Team. Ant Design, a design
//         language for background applications, is refined by Ant UED Team. Ant Design, a design
//         language for background applications, is refined by Ant UED Team.`,
//         references: [{
//             id: 'laa',
//             url: 'lala',
//             text: 'laa',
//         }],
//     }]
// }