import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Rate, Typography, Button, Layout, Row, Col, Avatar, Icon, Card, Tooltip, Table, Divider } from 'antd';
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
    });
    const contentValue = ['Poor', 'Decent', 'Good', 'Very Good', 'Rich'];
    let rating = 0;
    course.ratings.forEach(rate => {
        rating += rate;
    });
    const lessonColumns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Text Content',
            dataIndex: 'textcontent',
            key: 'textcontent',
        },
        {
            title: 'References',
            dataIndex: 'references',
            key: 'references',
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (
                <span>
                    <Tooltip title='Delete this lesson' key='del-button'>
                        <Button type='danger' icon='delete' />
                    </Tooltip>
                    <Divider type='vertical' />
                    <Tooltip title='Edit this lesson' key='edit-button'>
                        <Button type='primary' icon='edit' />
                    </Tooltip>
                </span>
            ),
        },
    ];
    const testColumns = [
        {
            title: 'S/N',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: 'Question',
            dataIndex: 'question',
            key: 'question',
        },
        {
            title: 'Options',
            dataIndex: 'options',
            key: 'options',
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (
                <span>
                    <Tooltip title='Delete this lesson' key='del-button'>
                        <Button type='danger' icon='delete' />
                    </Tooltip>
                    <Divider type='vertical' />
                    <Tooltip title='Edit this lesson' key='edit-button'>
                        <Button type='primary' icon='edit' />
                    </Tooltip>
                </span>
            ),
        },
    ];

    const lessonData = []
    course.lessons.forEach(lesson => {
        const format = {
            key: lesson.id,
            title: lesson.title,
            textcontent: lesson.textContent.substring(0, 100),
            references: lesson.references.length
        };
        lessonData.push(format);
    });

    const testData = []
    course.tests.forEach((question, index) => {
        const format = {
            key: question.id,
            number: index + 1,
            question: question.question.substring(0, 100),
            options: question.options.length
        };
        testData.push(format);
    });

    const moreButtons = auth && auth.role === 'tutor' && auth.userId === course.authorId ? [
        <Tooltip title='Delete this course' key='del-button'>
            <Button type='danger' icon='delete' />
        </Tooltip>
        ,
        <Divider type='vertical' />
        ,
        <Tooltip title='Edit this course' key='edit-button'>
            <Button type='primary' icon='edit' />
        </Tooltip>
    ] : []
    return (
        <div>
            <Layout style={{ backgroundColor: 'white', borderTop: '1px solid  rgb(235, 237, 240)' }}>
                <div style={{ backgroundColor: 'firebrick' }} className='course-header'>
                    <div className='course-header-container'>
                        <Icon type='book' />
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
                                    <Card bordered={false} title='Course Information' extra={moreButtons}>
                                        <div className='course-add-meta'>
                                            <div>
                                                <Icon type='file' />
                                                <Text type='secondary'>{course.lessons && course.lessons.length}{!course.lessons && 0} lessons</Text>
                                            </div>
                                            <div>
                                                <Icon type='read' />
                                                <Text type='secondary'>{contentValue[Math.round(rating / course.ratings.length) - 1]} Learning Content</Text>
                                            </div>
                                            {
                                                course.tests && course.tests.length > 0 &&
                                                <div>
                                                    <Icon type='check-square' />
                                                    <Text type='secondary'>Interactive Quizes</Text>
                                                </div>
                                            }
                                            <div>
                                                <Icon type='clock-circle' />
                                                <Text type='secondary'>Self-Paced Learning</Text>
                                            </div>
                                        </div>
                                        <div>
                                            <Avatar style={{ color: '#c56a00', backgroundColor: '#cde3cf', marginRight: 10 }}>JD</Avatar>
                                            <Text type='secondary'>John Doe</Text>
                                        </div>
                                        <Rate defaultValue={Math.round(rating / course.ratings.length)} disabled />
                                        <div>
                                            {
                                                auth &&
                                                <div>
                                                    <div className='enroll-btn'>
                                                        <Button type='primary' size='large' disabled={auth.userId === course.authorId || isEnrolled}>Enroll in course</Button>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {
                        auth.userId === course.authorId &&
                        <div>
                            <Row>
                                <Col>
                                    <div>
                                        <Link to='/lesson/create' className='ant-btn ant-btn-lg' style={{ marginBottom: 20 }}>Add a lesson</Link>
                                        <Table dataSource={lessonData} columns={lessonColumns} />
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <Link to='/lesson/create' className='ant-btn ant-btn-lg' style={{ marginBottom: 20 }}>Add a Question</Link>
                                        <Table dataSource={testData} columns={testColumns} />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    }
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