import React, { useContext, useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Layout, Row, Col, Tabs, Empty, message } from 'antd';
import '../styles/dashboard.css';
import CourseDetailSmall from '../components/Catalogue/CourseDetailSmall';
import { AuthContext } from '../store/Contexts/auth';
import { CourseContext } from '../store/Contexts/course';

const { Content } = Layout;
const { TabPane } = Tabs;


const Dashboard = () => {
    const { auth } = useContext(AuthContext);
    const { courses } = useContext(CourseContext);
    const [createdCourses, setCreatedCourses] = useState();
    const [activeCourses, setActiveCourses] = useState();
    const [completedCourses, setCompletedCourses] = useState();

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            const newCreatedCourses = courses.filter((course) => {
                return JSON.parse(localStorage.getItem('auth')).createdCourses.filter((created) => {
                    return created._id === course._id;
                }).length === 1;
            });
            setCreatedCourses(newCreatedCourses);
        }
    }, [courses, auth]);


    useEffect(() => {
        if (localStorage.getItem('auth')) {
            const newCreatedCourses = courses.filter((course) => {
                return JSON.parse(localStorage.getItem('auth')).enrolledCourses.filter((enrolled) => {
                    return enrolled._id === course._id && !enrolled.isCompleted
                }).length === 1;
            });
            setActiveCourses(newCreatedCourses);
        }
    }, [courses, auth]);

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            const newCreatedCourses = courses.filter((course) => {
                return JSON.parse(localStorage.getItem('auth')).enrolledCourses.filter((enrolled) => {
                    return enrolled._id === course._id && enrolled.isCompleted
                }).length === 1;
            });
            setCompletedCourses(newCreatedCourses);
        }
    }, [courses, auth]);

    if (!auth) {
        return <Redirect to='/' />
    }

    // console.log(completedCourses);
    return (
        <Layout>
            <Layout style={{ margin: '50px 0 0' }}>
                <Content style={{ margin: '0 30px' }}>
                    <div style={{ padding: 24, background: '#fff', minHeight: 'calc(100vh - 184px)' }}>
                        <div className='dashboard-tabs'>
                            <Tabs tabBarExtraContent={[auth.role === 'tutor' ? <Link to='/course/create' className='ant-btn ant-btn-default' key='create-course-btn'>Create a course</Link> : null]}>
                                {
                                    auth.role === 'tutor' &&
                                    <TabPane tab="Created Courses" key="created-courses">
                                        {
                                            createdCourses && createdCourses.length > 0 &&
                                            <Row gutter={{ xs: 10, md: 28, lg: 36, xl: 48 }}>
                                                {createdCourses && createdCourses.map((course) => {
                                                    return (
                                                        <Col key={course._id} xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 4 }} style={{ marginBottom: 40 }}>
                                                            <Link to={`/catalogue/${course._id}`}>
                                                                <CourseDetailSmall course={course} />
                                                            </Link>
                                                        </Col>
                                                    );
                                                })}
                                            </Row>
                                        }
                                        {
                                            createdCourses && createdCourses.length < 1 &&
                                            <Empty
                                                imageStyle={{
                                                    height: 200,
                                                }}
                                                description={
                                                    <span>
                                                        You haven't created any course yet
                                                    </span>
                                                }
                                            >
                                                <Link to='/course/create' className='ant-btn ant-btn-primary'>Create a course</Link>
                                            </Empty>
                                        }
                                    </TabPane>
                                }
                                <TabPane tab="Active Courses" key="active-courses">
                                    {
                                        activeCourses && activeCourses.length > 0 &&
                                        < Row gutter={{ xs: 10, md: 28, lg: 36, xl: 48 }}>
                                            {
                                                activeCourses.map((course) => {
                                                    console.log(course)
                                                    return (
                                                        <Col key={course._id} xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 4 }} style={{ marginBottom: 40 }}>
                                                            {
                                                                course.lessons && course.lessons.length > 0 &&
                                                                < Link to={`/classroom/${course._id}/${course.lessons[0]._id}`}>
                                                                    <CourseDetailSmall course={course} />
                                                                </Link>
                                                            }
                                                            {
                                                                course.lessons && course.lessons.length <= 0 &&
                                                                <div className='no-lesson-small' onClick={() => {
                                                                    message.info('No lessons available. Try again later')
                                                                }}>
                                                                    <CourseDetailSmall course={course} />
                                                                </div>
                                                            }
                                                        </Col>
                                                    )
                                                })
                                            }
                                        </Row>
                                    }
                                    {
                                        activeCourses && activeCourses.length <= 0 &&
                                        <Empty
                                            // image={Empty.PRESENTED_IMAGE_SIMPLE}
                                            imageStyle={{
                                                height: 200,
                                            }}
                                            description={
                                                <span>
                                                    You haven't enrolled in any course yet
                                                    </span>
                                            }
                                        >
                                            <Link to='/catalogue' className='ant-btn ant-btn-primary'>Enroll in a course</Link>
                                        </Empty>
                                    }
                                </TabPane>
                                <TabPane tab="Completed Courses" key="completed-courses">
                                    {
                                        completedCourses && completedCourses.length > 0 &&
                                        <Row gutter={{ xs: 10, md: 28, lg: 36, xl: 48 }}>
                                            {
                                                completedCourses.map((course) => {
                                                    console.log(course);
                                                    return (
                                                        <Col key={course._id} xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 4 }} style={{ marginBottom: 40 }}>
                                                            {
                                                                course.lessons && course.lessons.length > 0 &&
                                                                < Link to={`/classroom/${course._id}/${course.lessons[0]._id}`}>
                                                                    <CourseDetailSmall course={course} />
                                                                </Link>
                                                            }
                                                            {
                                                                course.lessons && course.lessons.length <= 0 &&
                                                                < Link to={`/classroom/${course._id}/undeefined`}>
                                                                    <CourseDetailSmall course={course} />
                                                                </Link>
                                                            }
                                                        </Col>
                                                    )
                                                })
                                            }
                                        </Row>
                                    }
                                    {
                                        completedCourses && completedCourses.length < 1 &&
                                        <Empty
                                            // image={Empty.PRESENTED_IMAGE_SIMPLE}
                                            imageStyle={{
                                                height: 200,
                                            }}
                                            description={
                                                <span>
                                                    You haven't completed any course yet
                                                    </span>
                                            }
                                        >
                                        </Empty>
                                    }
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout >
    );
}

export default Dashboard;