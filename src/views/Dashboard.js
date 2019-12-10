import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col, Tabs, Empty } from 'antd';
import '../styles/dashboard.css';
import CourseDetailSmall from '../components/Catalogue/CourseDetailSmall';
import { AuthContext } from '../store/Contexts/auth';
import { CourseContext } from '../store/Contexts/course';

const { Content } = Layout;
const { TabPane } = Tabs;


const Dashboard = () => {
    const { auth } = useContext(AuthContext);
    const { courses } = useContext(CourseContext);

    const createdCourses = courses.filter((course) => {
        return auth.createdCourses.filter((created) => {
            return created.id === course.id;
        }).length === 1;
    });

    const activeCourses = courses.filter((course) => {
        return auth.enrolledCourses.filter((enrolled) => {
            return enrolled.id === course.id && !enrolled.isCompleted
        }).length === 1;
    });

    const completedCourses = courses.filter((course) => {
        return auth.enrolledCourses.filter((enrolled) => {
            return enrolled.id === course.id && enrolled.isCompleted
        }).length === 1;
    });

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
                                            createdCourses &&
                                            <Row gutter={{ xs: 10, md: 28, lg: 36, xl: 48 }}>
                                                {createdCourses && createdCourses.map((course) => {
                                                    return (
                                                        <Col key={course.id} xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 4 }} style={{ marginBottom: 40 }}>
                                                            <Link to={`/catalogue/${course.id}`}>
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
                                                // image={Empty.PRESENTED_IMAGE_SIMPLE}
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
                                        activeCourses &&
                                        <Row gutter={{ xs: 10, md: 28, lg: 36, xl: 48 }}>
                                            {
                                                activeCourses.map((course) => {
                                                    return (
                                                        <Col key={course.id} xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 4 }} style={{ marginBottom: 40 }}>
                                                            <Link to={`/classroom/${course.id}`}>
                                                                <CourseDetailSmall course={course} />
                                                            </Link>
                                                        </Col>
                                                    )
                                                })
                                            }
                                        </Row>
                                    }
                                    {
                                        activeCourses && activeCourses.length < 1 &&
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
                                        completedCourses &&
                                        <Row gutter={{ xs: 10, md: 28, lg: 36, xl: 48 }}>
                                            {
                                                completedCourses.map((course) => {
                                                    return (
                                                        <Col key={course.id} xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 4 }} style={{ marginBottom: 40 }}>
                                                            <Link to={`/classroom/${course.id}`}>
                                                                <CourseDetailSmall course={course} />
                                                            </Link>
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
        </Layout>
    );
}

export default Dashboard;