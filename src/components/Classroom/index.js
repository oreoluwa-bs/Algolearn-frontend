import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Button, message, Empty, Typography, List, Menu, Modal, Rate } from 'antd';
import { CourseContext } from '../../store/Contexts/course';
import '../../styles/classroom.css';

const { Content, Sider } = Layout;
const { Title, Paragraph } = Typography;

const Classroom = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const [modalVisible, setModal] = useState(false);
    const [userRate, setRate] = useState(3);
    const { courses } = useContext(CourseContext);

    const onCollapse = collapsed => {
        setCollapsed(collapsed);
    };
    console.log(props)
    const course = courses.find((course) => {
        return course.id === props.match.params.courseId
    });

    const lessons = [...course.lessons]

    const lessonIndex = lessons.findIndex((lesson) => {
        return lesson.id === props.match.params.lessonId
    })
    const lesson = lessons.find((lesson) => {
        return lesson.id === props.match.params.lessonId
    });


    const showModal = () => {
        setModal(true);
    };

    const handleRating = (value) => {
        setRate(value);
    };

    const handleOk = () => {
        if (!course.tests) {
            return message.success('This is a success message');
        } else {
            props.history.push(`/tests/${course.id}`);
        }
    };

    const handleCancel = () => {
        setModal(false);
    };

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
                                    <Menu
                                        theme='dark'
                                        defaultSelectedKeys={[lesson.id]}
                                        mode='inline'>
                                        {
                                            lessons.map((lesson) => (
                                                <Menu.Item key={lesson.id}>
                                                    <span>{lesson.title}</span>
                                                    <Link to={`/classroom/${course.id}/${lesson.id}`} />
                                                </Menu.Item>
                                            ))
                                        }
                                    </Menu>
                                </Sider>
                                <Content style={{ background: '#fff' }}>
                                    <div className='class-content'>
                                        {
                                            lesson &&
                                            <div>
                                                <Title level={4}>{lesson.title}</Title>
                                                {
                                                    lesson.videoUrl &&
                                                    <iframe title={lesson.title} style={{ width: '100%', height: '600px', margin: '20px 0' }} src="https://www.youtube.com/embed/HyHNuVaZJ-k" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                                                }
                                                {
                                                    lesson.textContent &&
                                                    <Paragraph>{lesson.textContent}</Paragraph>
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
                                                <div className="steps-action">
                                                    {
                                                        lessons[lessons.length - 1].id !== lesson.id && (
                                                            <Link to={`/classroom/${course.id}/${lessons[lessonIndex + 1].id}`} className='ant-btn ant-btn-primary'>
                                                                Next lesson
                                                            </Link>
                                                        )
                                                    }
                                                    {
                                                        lessons[lessons.length - 1].id === lesson.id && (
                                                            <div>
                                                                <Button type="primary" onClick={showModal}>
                                                                    Done
                                                                </Button>
                                                                <Modal
                                                                    width={300}
                                                                    title="Feedback"
                                                                    visible={modalVisible}
                                                                    onOk={handleOk}
                                                                    onCancel={handleCancel}
                                                                    footer={[
                                                                        <Button key="submit" type="primary" onClick={handleOk}>
                                                                            {
                                                                                course.tests ? 'Take test' : 'Done'
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