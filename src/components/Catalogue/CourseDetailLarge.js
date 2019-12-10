import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Rate, Typography, Button, Layout, Row, Col, Avatar, Icon } from 'antd';
import WrappedNormalContactForm from '../Misc/ContactView';
import CourseDetailSmall from './CourseDetailSmall';
import { CourseContext } from '../../store/Contexts/course';
import { AuthContext } from '../../store/Contexts/auth';

const { Paragraph, Text, Title } = Typography;
const { Content } = Layout;

const CourseDetailLarge = (props) => {
    const { courses } = useContext(CourseContext);
    const { auth } = useContext(AuthContext);
    const course = courses.find((course) => {
        return course.id === props.match.params.courseId
    });
    const isEnrolled = auth.enrolledCourses.some((cour) => {
        return cour.id === course.id
    })
    return (
        <div>
            <Layout style={{ backgroundColor: 'white', borderTop: '1px solid  rgb(235, 237, 240)' }}>
                <div style={{ backgroundColor: 'firebrick' }} className='course-header'>
                    <div className='course-header-container'>
                        <Icon type="book" />
                        <Title level={1} style={{ color: 'white' }}>{course.title}</Title>
                    </div>
                </div>
                <Content style={{ backgroundColor: 'white', margin: '100px auto', maxWidth: '80vw' }}>
                    <Row gutter={{ xs: 10, md: 28, lg: 36, xl: 48 }}>
                        <Col xs={{ span: 24 }} md={{ span: 16 }}>
                            <div className='course-details'>
                                <div className='course-details-body'>
                                    <Paragraph>
                                        {course.description}
                                    </Paragraph>
                                </div>
                            </div>
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 8 }} className='course-meta-container'>
                            <div className='course-add-info'>
                                <div className='course-add-body'>
                                    <h1>Course Information</h1>
                                    <div className='course-add-meta'>
                                        <div>
                                            <Icon type="file" />
                                            <Text type='secondary'>12 lessons</Text>
                                        </div>
                                        <div>
                                            <Icon type="read" />
                                            <Text type='secondary'>Rich Learning Content</Text>
                                        </div>
                                        {
                                            course.tests && course.tests.length > 0 &&
                                            <div>
                                                <Icon type="check-square" />
                                                <Text type='secondary'>Interactive Quizes</Text>
                                            </div>
                                        }
                                        <div>
                                            <Icon type="clock-circle" />
                                            <Text type='secondary'>Self-Paced Learning</Text>
                                        </div>
                                    </div>
                                    <div>
                                        <Avatar style={{ color: '#c56a00', backgroundColor: '#cde3cf', marginRight: 10 }}>JD</Avatar>
                                        <Text type='secondary'>John Doe</Text>
                                    </div>
                                    <Rate defaultValue={3} disabled />
                                    <div>
                                        {
                                            auth &&
                                            <div>
                                                <div className='enroll-btn'>
                                                    <Button type='primary' size='large' disabled={auth.userId === course.authorId || isEnrolled}>Enroll in course</Button>
                                                </div>
                                            </div>
                                        }
                                        {
                                            auth && auth.userId === course.authorId &&
                                            <div>
                                                <div className='enroll-btn'>
                                                    <Button type='danger' size='large'>Delete course</Button>
                                                </div>
                                                <div className='enroll-btn'>
                                                    <Button type='primary' size='large'>Edit course</Button>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Content>
                <Layout>
                    <div style={{ width: '65vw', margin: '100px auto' }}>
                        <Title level={4}>Check out some other courses</Title>
                        <br></br>
                        <Row gutter={{ xs: 10, md: 28, lg: 36, xl: 48 }}>
                            <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}>
                                <Link to={`/catalogue/${courses[0].id}`}>
                                    <CourseDetailSmall course={courses[0]} />
                                </Link>
                            </Col>
                            <Col xs={{ span: 0 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}>
                                <Link to={`/catalogue/${courses[1].id}`}>
                                    <CourseDetailSmall course={courses[1]} />
                                </Link>
                            </Col>
                            <Col xs={{ span: 0 }} lg={{ span: 8 }} xl={{ span: 6 }}>
                                <Link to={`/catalogue/${courses[2].id}`}>
                                    <CourseDetailSmall course={courses[2]} />
                                </Link>
                            </Col>
                            <Col xs={{ span: 0 }} xl={{ span: 6 }}>
                                <Link to={`/catalogue/${courses[3].id}`}>
                                    <CourseDetailSmall course={courses[3]} />
                                </Link>
                            </Col>
                        </Row>
                    </div>
                </Layout>
            </Layout>
            <WrappedNormalContactForm />
        </div>
    );
}

export default CourseDetailLarge;