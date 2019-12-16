import React, { useState, useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Layout, Button, message, Empty, Typography, List, Menu, Modal, Rate, Form } from 'antd';
import { CourseContext } from '../../store/Contexts/course';
import '../../styles/classroom.css';
import { AuthContext } from '../../store/Contexts/auth';

const { Content, Sider } = Layout;
// const { Title, Paragraph } = Typography;
const { Title } = Typography;

const Classroom = (props) => {
    const { courses, handleRateCourse } = useContext(CourseContext);
    const { handleCompleteCourse, auth } = useContext(AuthContext);
    const [collapsed, setCollapsed] = useState(false);
    const [modalVisible, setModal] = useState(false);
    const [userRate, setRate] = useState(3);
    const [course, setCurrCourse] = useState();
    const [lessons, setLessons] = useState([]);
    const [lesson, setLesson] = useState([]);
    const [lessonIndex, setLessonIndex] = useState([]);

    const onCollapse = collapsed => {
        setCollapsed(collapsed);
    };

    useEffect(() => {
        if (courses) {
            const tempCourse = courses.find((course) => {
                return course._id === props.match.params.courseId
            });
            setCurrCourse(tempCourse);
            if (tempCourse) {
                setLessons(tempCourse.lessons)
            }
        }
    }, [courses, props.match.params.courseId])

    useEffect(() => {
        if (courses) {
            const tempLesson = lessons.find((lesson) => {
                return lesson._id === props.match.params.lessonId
            });

            const currIndex = lessons.findIndex((lesson) => {
                return lesson._id === props.match.params.lessonId
            });

            setLessonIndex(currIndex);
            setLesson(tempLesson);
        }
    }, [lessons, courses, props.match.params.lessonId])


    const showModal = () => {
        setModal(true);
    };

    const handleRating = (value) => {
        setRate(value);
    };

    const handleOk = () => {
        handleRateCourse(course._id, userRate);
        if (!course.test) {
            // return message.success('This is a success message');
            handleCompleteCourse(course._id);
            props.history.push(`/dashboard`);
        } else {
            props.history.push(`/tests/${course._id}`);
        }
    };

    const handleCancel = () => {
        setModal(false);
    };


    if (!auth) {
        return <Redirect to='/' />
    }

    return (
        <Layout className='classroom'>
            <Content className='classroom-main'>
                <div style={{ background: '#fff', minHeight: 'calc(100vh - 234px)', width: '100%' }}>
                    <div>
                        {
                            lessons && lessons.length > 0 &&
                            <Layout>
                                <Sider theme='dark' className='class-sider' style={{ minHeight: 'calc(100vh - 113px)' }}
                                    collapsible collapsed={collapsed} onCollapse={onCollapse} breakpoint='sm' collapsedWidth={0}>
                                    {
                                        lesson && lesson._id &&
                                        <Menu
                                            theme='dark'
                                            defaultSelectedKeys={[lesson._id]}
                                            mode='inline'>
                                            {
                                                lessons.map((lesson) => (
                                                    <Menu.Item key={lesson._id}>
                                                        <span>{lesson.title}</span>
                                                        <Link to={`/classroom/${course._id}/${lesson._id}`} />
                                                    </Menu.Item>
                                                ))
                                            }
                                        </Menu>
                                    }
                                </Sider>
                                <Content style={{ background: '#fff' }}>
                                    <div className='class-content'>
                                        {
                                            lesson &&
                                            <div>
                                                <Title level={4}>{lesson.title}</Title>
                                                {
                                                    lesson.videoUrl &&
                                                    <iframe title={lesson.title} style={{ width: '100%', height: '600px', margin: '20px 0' }}
                                                        src='https://www.youtube.com/embed/HyHNuVaZJ-k' frameBorder='0'
                                                        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen>
                                                    </iframe>

                                                }
                                                {
                                                    lesson.textContent &&
                                                    <ReactMarkdown source={lesson.textContent} />
                                                    // <Paragraph>{lesson.textContent}</Paragraph>
                                                }
                                                {

                                                    lesson.references && lesson.references.length > 0 &&
                                                    <div className='references-links'>
                                                        <List
                                                            header='References'
                                                            itemLayout='horizontal'
                                                            split={false}
                                                            dataSource={lesson.references}
                                                            renderItem={(item, index) => (
                                                                <List.Item>
                                                                    <List.Item.Meta
                                                                        description={<span>{index + 1}. <Link to={item.url || '/'}>{item.text || 'Link'}</Link></span>}
                                                                    />
                                                                </List.Item>
                                                            )}
                                                        />
                                                    </div>
                                                }
                                                <Form.Item>
                                                    <div className='steps-action' style={{ float: 'right' }}>
                                                        {
                                                            lessons[lessons.length - 1]._id !== lesson._id && (
                                                                <Link to={`/classroom/${course._id}/${lessons[lessonIndex + 1]._id}`} className='ant-btn ant-btn-primary'>
                                                                    Next lesson
                                                                </Link>
                                                            )
                                                        }
                                                        {
                                                            lessons[lessons.length - 1]._id === lesson._id && (
                                                                <div>
                                                                    <Button type='primary' onClick={showModal}>
                                                                        Done
                                                                </Button>
                                                                    <Modal
                                                                        width={300}
                                                                        title='Feedback'
                                                                        visible={modalVisible}
                                                                        onOk={handleOk}
                                                                        onCancel={handleCancel}
                                                                        footer={[
                                                                            <Button key='submit' type='primary' onClick={handleOk}>
                                                                                {
                                                                                    course.test ? 'Take test' : 'Done'
                                                                                }
                                                                            </Button>,
                                                                        ]}
                                                                    >
                                                                        <Rate onChange={handleRating} value={userRate} style={{ fontSize: 30 }} />
                                                                    </Modal>
                                                                </div>
                                                            )
                                                        }
                                                    </div>
                                                </Form.Item>
                                            </div>

                                        }
                                        {
                                            !lesson &&
                                            <Empty
                                                imageStyle={{
                                                    height: 200,
                                                }}
                                                description={
                                                    <span>
                                                        There are no lessons available at the momment
                                                    </span>
                                                }
                                            >
                                            </Empty>
                                        }
                                    </div>
                                </Content>
                            </Layout>
                        }
                    </div>
                </div>
            </Content>
        </Layout>
    );
}

export default Classroom;