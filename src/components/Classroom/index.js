import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Steps, Popover, Button, message, Empty, Typography, List } from 'antd';
import '../../styles/classroom.css'
import { CourseContext } from '../../store/Contexts/course';

const { Content } = Layout;
const { Step } = Steps;
const { Title, Paragraph } = Typography;

const customDot = (dot, { title }) => (
    <Popover
        content={
            <span>
                {title}
            </span>
        }
    >
        {dot}
    </Popover>
);

const Classroom = (props) => {
    const [current, setCurrent] = useState(0)

    const onChange = current => {
        setCurrent(current)
    };

    const { courses } = useContext(CourseContext);
    // const { auth } = useContext(AuthContext);
    const course = courses.find((course) => {
        return course.id === props.match.params.courseId
    });

    const lessons = course.lessons
    return (
        <Layout>
            <Content style={{ padding: '50px 50px' }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 'calc(100vh - 234px)', width: '100%' }}>
                    <div style={{}}>
                        <Steps current={current} onChange={onChange} progressDot={customDot}>
                            {lessons.map(item => (
                                <Step key={item.title} title={item.title} />
                            ))}
                        </Steps>
                    </div>
                    <div className="steps-content">
                        {
                            lessons && lessons.length > 0 &&
                            <div>
                                <Title level={4}>{lessons[current].title}</Title>
                                {
                                    lessons[current].videoUrl &&
                                    <iframe title={lessons[current].title} style={{ width: '80%', height: '600px', margin: '20px 0' }} src="https://www.youtube.com/embed/HyHNuVaZJ-k" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                                }
                                {
                                    lessons[current].textContent &&
                                    <Paragraph>{lessons[current].textContent}</Paragraph>
                                }
                                {

                                    lessons[current].references && lessons[current].references.length > 0 &&
                                    <div className='references-links'>
                                        {/* <Paragraph>references</Paragraph> */}
                                        <List
                                            header='References'
                                            itemLayout='horizontal'
                                            split={false}
                                            dataSource={lessons[current].references}
                                            renderItem={(item, index) => (
                                                <List.Item>
                                                    <List.Item.Meta
                                                        // title={item.text}
                                                        description={<span>{index + 1}. <Link to={item.url}>{item.text || 'Link'}</Link></span>}
                                                    />
                                                </List.Item>
                                            )}
                                        />
                                    </div>
                                }
                            </div>
                        }
                        {
                            lessons && lessons.length <= 0 &&
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
                    <div className="steps-action">
                        {current < lessons.length - 1 && (
                            <Button type="primary" onClick={() => {
                                const nextStep = current + 1;
                                setCurrent(nextStep);
                            }}>
                                Next lesson
                            </Button>
                        )}
                        {current === lessons.length - 1 && (
                            <Button type="primary" onClick={() => message.success('Processing complete!')}>
                                Done
                            </Button>
                        )}
                    </div>
                </div>
            </Content>
        </Layout>
    );
}

export default Classroom;