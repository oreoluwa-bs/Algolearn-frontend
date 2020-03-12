import React, { useState, useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Layout, Button, Empty, Typography, List, Menu, Modal, Rate, Form } from 'antd';
import { CourseContext } from '../../store/Contexts/course';
import '../../styles/classroom.css';
import { AuthContext } from '../../store/Contexts/auth';

const { Content, Sider } = Layout;
const { Title } = Typography;

const Classroom = (props) => {
    const { courses, handleRateCourse, handleFlagCourse } = useContext(CourseContext);
    const { handleCompleteCourse, auth } = useContext(AuthContext);
    const [collapsed, setCollapsed] = useState(false);
    const [modalVisible, setModal] = useState(false);
    const [modalFlagVisible, setFlagModal] = useState(false);
    const [userRate, setRate] = useState(3);
    const [course, setCurrCourse] = useState();
    const [lessons, setLessons] = useState([]);
    const [lesson, setLesson] = useState([]);
    const [lessonIndex, setLessonIndex] = useState([]);
    const [currKey, setCurrKey] = useState();

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

    useEffect(() => {
        if (lessons && lessons.length > 0) {
            // console.log(lessons);
            setCurrKey(lessons[0]._id);
        }
    }, [lessons]);

    useEffect(() => {
        if (lessons && !lesson) {
            if (lessons.length > 0) {
                props.history.push(`/classroom/${props.match.params.courseId}/${lessons[0]._id}`);
            }
        }
    }, [lesson, props.history, props.match.params.courseId, lessons]);


    const handleRating = (value) => {
        setRate(value);
    };

    const handleOk = () => {
        handleRateCourse(course._id, userRate);
        if (course.test && course.test.length <= 0) {
            handleCompleteCourse(course._id);
            props.history.push(`/dashboard`);
        } else {
            props.history.push(`/tests/${course._id}`);
        }
    };

    const handleFlag = (reason) => {
        const values = {
            courseId: course._id,
            reason,
            title: course.title,
            reporterId: auth._id,
            reporterName: `${auth.firstname} ${auth.lastname}`,
        }
        handleFlagCourse(values);
        setFlagModal(false);
    };

    const handleChangeLessonTopic = (e) => {
        // console.log(e.id);
        setCurrKey(e.key);
    };
    const handleNextLesson = () => {
        props.history.push(`/classroom/${course._id}/${lessons[lessonIndex + 1]._id}`);
        setCurrKey(lessons[lessonIndex + 1]._id);
    }

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
                                            // defaultSelectedKeys={[]}
                                            selectedKeys={[currKey]}
                                            onClick={handleChangeLessonTopic}
                                            mode='inline'>
                                            {
                                                lessons.map((lesson) => (
                                                    <Menu.Item id={lesson._id} key={lesson._id}>
                                                        <span>{lesson.title}</span>
                                                        <Link to={`/classroom/${course._id}/${lesson._id}`} />
                                                    </Menu.Item>
                                                ))
                                            }
                                        </Menu>
                                    }
                                </Sider>
                                <Content style={{ background: 'white' }}>
                                    <div className='class-content'>
                                        {
                                            lesson &&
                                            <div>
                                                <div style={{}}>
                                                    <Title level={4} style={{ float: 'left' }}>{lesson.title}</Title>
                                                    <Link to={`/discuss/?userId=${auth._id}&room=${course._id}`}>
                                                        <Button type='primary' icon='message' style={{ float: 'right', marginLeft: 10 }} onClick={() => null} disabled={auth.role === 'admin'} />
                                                    </Link>
                                                    <Button icon='flag' style={{ float: 'right' }} onClick={() => setFlagModal(true)} disabled={auth.role === 'admin'} />

                                                    <Modal
                                                        title='Report'
                                                        visible={modalFlagVisible}
                                                        onOk={() => setFlagModal(false)}
                                                        onCancel={() => setFlagModal(false)}
                                                        footer={null}
                                                        className='flag-modal'

                                                    >
                                                        <List
                                                            size="large"
                                                            bordered
                                                            dataSource={['Using someone elses content', 'It\'s inappropriate', 'Inaccurate Content', 'Spam', 'Offensive', 'Fails to teach its aim']}
                                                            renderItem={item => <List.Item className='flag-modal-list-item' onClick={() => { handleFlag(item) }}>{item}</List.Item>}
                                                        />
                                                    </Modal>
                                                </div>
                                                <br />
                                                {
                                                    lesson.videoURL &&
                                                    <div style={{ width: '70%', margin: '20px auto' }}>
                                                        <iframe title={lesson.title} src={`${lesson.videoURL}`}
                                                            style={{ width: '100%', height: '600px', margin: '20px auto', border: '1px solid #eee' }}
                                                            frameBorder="0" allow="fullscreen" allowFullScreen>
                                                        </iframe>
                                                    </div>
                                                }
                                                {
                                                    lesson.textContent &&
                                                    <div className='class-texct'>
                                                        <br />
                                                        <br />
                                                        <ReactMarkdown source={lesson.textContent} />
                                                    </div>
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
                                                                <Button type='primary' onClick={handleNextLesson}>
                                                                    Next lesson
                                                                </Button>
                                                            )
                                                        }
                                                        {
                                                            lessons[lessons.length - 1]._id === lesson._id && (
                                                                <div>
                                                                    <Button type='primary' onClick={() => setModal(true)}>
                                                                        Done
                                                                </Button>
                                                                    <Modal
                                                                        width={300}
                                                                        title='Feedback'
                                                                        visible={modalVisible}
                                                                        onOk={handleOk}
                                                                        onCancel={() => setModal(false)}
                                                                        footer={[
                                                                            <Button key='submit' type='primary' onClick={handleOk} disabled={auth.role === 'admin'}>
                                                                                {
                                                                                    course.test && course.test.length > 0 ? 'Take test' : 'Done'
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