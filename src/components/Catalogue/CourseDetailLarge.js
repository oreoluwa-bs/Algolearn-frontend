import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Rate, Typography, Button, Layout, Row, Col, Avatar, Icon,
    Card, Tooltip, Table, Divider, Popconfirm, Modal,
} from 'antd';

import WrappedNormalContactForm from '../Misc/ContactView';
import { CourseContext } from '../../store/Contexts/course';
import { AuthContext } from '../../store/Contexts/auth';
import CheckOtherCourses from './CheckOthers';
import WrappedNormalEditCourseForm from './EditCoursePage';
import { ColorContext } from '../../store/Contexts/colors';

const { Paragraph, Text, Title } = Typography;
const { Content } = Layout;

const CourseDetailLarge = (props) => {
    const { courses } = useContext(CourseContext);
    const { auth } = useContext(AuthContext);
    const [tempCourse, setTempCourses] = useState([]);
    const [course, setCourse] = useState(null);

    const currCourse = tempCourse.find((course) => {
        return course._id === props.match.params.courseId
    })
    useEffect(() => {
        setTempCourses(courses);
        if (currCourse !== undefined) {
            setCourse(currCourse);
        }
    }, [courses, currCourse]);

    return (
        <div>
            <Layout style={{ backgroundColor: 'white', borderTop: '1px solid  rgb(235, 237, 240)' }}>
                {course !== null && < DetailsView course={course} auth={auth} history={props.history} />}
                {tempCourse && tempCourse.length > 0 && <CheckOtherCourses courses={tempCourse} />}
            </Layout>
            <WrappedNormalContactForm />
        </div>
    );
}

export default CourseDetailLarge;



const DetailsView = (props) => {
    const { handleDeleteCourse, handleEditCourse, handleDeleteLesson, handleDeleteQuestion } = useContext(CourseContext);
    const { colors_bg, colors_random } = useContext(ColorContext);
    
    const { handleEnrollInCourse } = useContext(AuthContext);
    const [courseEditModal, setCourseEditModal] = useState(false);

    const { course, auth } = props;

    let isEnrolled = false;

    if (auth) {
        isEnrolled = auth.enrolledCourses.some((cour) => {
            return cour._id === course._id
        });
    }

    const contentValue = ['Poor', 'Decent', 'Good', 'Very Good', 'Rich'];
    const rating = course.ratings.reduce((acc, currentOrder) => acc + currentOrder);

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
            render: (lesson) => (
                <span>
                    <Tooltip title='Delete this lesson' key='del-button'>
                        <Popconfirm
                            title="Are you sure delete this lesson?"
                            onConfirm={() => {
                                handleDeleteLesson(course._id, lesson.key);
                            }}
                            onCancel={null}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button type='danger' icon='delete' />
                        </Popconfirm>
                    </Tooltip>
                    <Divider type='vertical' />
                    <Tooltip title='Edit this lesson' key='edit-button'>
                        <Button type='primary' icon='edit' onClick={() => {
                            props.history.push(`/${course._id}/${lesson.key}/lesson/edit`);
                        }} />
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
            render: (question) => (
                <span>
                    <Tooltip title='Delete this lesson' key='del-button'>
                        <Popconfirm
                            title="Are you sure delete this question?"
                            onConfirm={() => {
                                // console.log(question, course);
                                handleDeleteQuestion(course._id, question.key);
                            }}
                            onCancel={null}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button type='danger' icon='delete' />
                        </Popconfirm>
                    </Tooltip>
                    <Divider type='vertical' />
                    <Tooltip title='Edit this lesson' key='edit-button'>
                        <Button type='primary' icon='edit' onClick={() => {
                            props.history.push(`/${course._id}/${question.key}/test/edit`);
                        }} />
                    </Tooltip>
                </span>
            ),
        },
    ];

    const lessonData = []
    course.lessons.forEach(lesson => {
        const format = {
            key: lesson._id,
            title: lesson.title,
            textcontent: lesson.textContent ? lesson.textContent.substring(0, 100) : null,
            references: lesson.references.length
        };
        lessonData.push(format);
    });

    const testData = []
    course.test.forEach((question, index) => {
        const format = {
            key: question._id,
            number: index + 1,
            question: question.question.substring(0, 100),
            options: question.answers.length
        };
        testData.push(format);
    });

    const moreButtons = auth && auth.role === 'tutor' && auth._id === course.authorId ? [
        <Tooltip title='Delete this course' key='del-button'>
            <Popconfirm
                title='Are you sure delete this course?'
                onConfirm={() => {
                    handleDeleteCourse(course._id);
                    props.history.push('/dashboard');
                }}
                onCancel={() => { return null }}
                okText='Yes'
                cancelText='No'
            >
                <Button type='danger' icon='delete' />
            </Popconfirm>
        </Tooltip>
        ,
        <Divider type='vertical' key='div' />
        ,
        <Tooltip title='Edit this course' key='edit-button'>
            <Button type='primary' icon='edit' onClick={() => setCourseEditModal(true)} />
        </Tooltip>
    ] : []
    return (
        <div>
            <div style={{ backgroundColor: colors_bg[colors_random()] }} className='course-header'>
                <div className='course-header-bg'></div>
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
                                        <Modal
                                            width={650}
                                            title='Edit course'
                                            visible={courseEditModal}
                                            onOk={() => setCourseEditModal(false)}
                                            onCancel={() => setCourseEditModal(false)}
                                            footer={null}
                                        >
                                            <WrappedNormalEditCourseForm handleEditCourse={handleEditCourse} course={course} closeModal={setCourseEditModal} />
                                        </Modal>
                                        <div>
                                            <Icon type='file' />
                                            <Text type='secondary'>{course.lessons && course.lessons.length}{!course.lessons && 0} lessons</Text>
                                        </div>
                                        <div>
                                            <Icon type='read' />
                                            <Text type='secondary'>{
                                                Math.round(rating / course.ratings.length) - 1 >= 0 ?
                                                    contentValue[Math.round(rating / course.ratings.length) - 1] : contentValue[0]
                                            } Learning Content</Text>
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
                                    <div style={{ marginBottom: 10 }}>
                                        <Avatar style={{ color: 'white', backgroundColor: colors_bg[colors_random()], marginRight: 10 }}>{course.authorName.split(' ')[0][0]}{course.authorName.split(' ')[1][0]}</Avatar>
                                        <Text type='secondary'>{course.authorName}</Text>
                                    </div>
                                    <Rate defaultValue={Math.round(rating / course.ratings.length)} disabled />
                                    <div>
                                        {
                                            auth &&
                                            <div>
                                                <div className='enroll-btn'>
                                                    <Button type='primary' size='large' disabled={auth._id === course.authorId || isEnrolled} onClick={() => {
                                                        handleEnrollInCourse(course._id);
                                                    }}>Enroll in course</Button>
                                                </div>
                                            </div>
                                        }
                                        {
                                            !auth &&
                                            <div>
                                                <div className='enroll-btn'>
                                                    <Link to='/login' className='ant-btn ant-btn-lg ant-btn-primary'>Enroll in course</Link>
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
                    auth && auth._id === course.authorId &&
                    <div>
                        <Row>
                            <Col>
                                <div>
                                    <Link to={`/${course._id}/lesson/create`} className='ant-btn ant-btn' style={{ marginBottom: 20 }}>Add a lesson</Link>
                                    <Table tableLayout='fixed' dataSource={lessonData} columns={lessonColumns} />
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Link to={`/${course._id}/test/create`} className='ant-btn ant-btn' style={{ marginBottom: 20, marginTop: 20 }}>Add a Question</Link>
                                    <Table tableLayout='fixed' dataSource={testData} columns={testColumns} />
                                </div>
                            </Col>
                        </Row>
                    </div>
                }
            </Content>
        </div >
    );
}