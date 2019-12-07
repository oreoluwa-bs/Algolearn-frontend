import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Rate, Typography, Button, Layout, Row, Col, Avatar, PageHeader, Icon, Divider } from 'antd';

const { Paragraph, Text, Title } = Typography;
const { Content } = Layout;

class CourseDetailLarge extends Component {
    state = {}
    render() {
        return (
            <Layout style={{ backgroundColor: 'white', borderTop: '1px solid  rgb(235, 237, 240)' }}>
                <Content style={{ backgroundColor: 'white', margin: '100px auto', maxWidth: '80vw' }}>
                    <PageHeader
                        style={{
                            // border: '1px solid rgb(235, 237, 240)',
                        }}
                        extra={[
                            <Button key="1" type="primary" size='large'>
                                Enroll in course
                            </Button>,
                        ]}
                        avatar={{ icon: 'book', style: { backgroundColor: 'orange' } }}
                        title='Course 2'
                    />
                    <Row gutter={{ xs: 10, md: 28, lg: 36, xl: 48 }}>
                        <Col xs={{ span: 24 }} md={{ span: 16 }} style={{ borderRight: '1px solid rgb(235, 237, 240)' }}>
                            <div className='course-details'>
                                <div className='course-details-body'>
                                    <Paragraph>
                                        Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                                        Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
                                        a design language for background applications, is refined by Ant UED Team. Ant Design, a
                                        design language for background applications, is refined by Ant UED Team. Ant Design, a design
                                        language for background applications, is refined by Ant UED Team. Ant Design, a design
                                        language for background applications, is refined by Ant UED Team.
                                        Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                                        Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
                                        a design language for background applications, is refined by Ant UED Team. Ant Design, a
                                        design language for background applications, is refined by Ant UED Team. Ant Design, a design
                                        language for background applications, is refined by Ant UED Team. Ant Design, a design
                                        language for background applications, is refined by Ant UED Team.
                                        Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                                        Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
                                        a design language for background applications, is refined by Ant UED Team. Ant Design, a
                                        design language for background applications, is refined by Ant UED Team. Ant Design, a design
                                        language for background applications, is refined by Ant UED Team. Ant Design, a design
                                        language for background applications, is refined by Ant UED Team.
                    </Paragraph>
                                </div>
                                {/* <Button type='primary' size='large'>Enroll in course</Button> */}
                            </div>
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 8 }}>
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
                                        <div>
                                            <Icon type="check-square" />
                                            <Text type='secondary'>Interactive Quizes</Text>
                                        </div>
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
                                <Link to=''>
                                    <div className='course-card'>
                                        <div className='course-card-top'></div>
                                        <div className='course-card-body'>
                                            <h1>Course 1</h1>
                                            <Paragraph ellipsis={{ rows: 3 }}>
                                                Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                                                Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
                                                a design language for background applications, is refined by Ant UED Team. Ant Design, a
                                                design language for background applications, is refined by Ant UED Team. Ant Design, a design
                                                language for background applications, is refined by Ant UED Team. Ant Design, a design
                                                language for background applications, is refined by Ant UED Team.
                                        </Paragraph>
                                            <div>
                                                <Text type='secondary'>-John Doe</Text>
                                            </div>
                                            <Rate defaultValue={3} disabled />
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                            <Col xs={{ span: 0 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}>
                                <div className='course-card'>
                                    <div className='course-card-top'></div>
                                    <div className='course-card-body'>
                                        <h1>Course 2</h1>
                                        <Paragraph ellipsis={{ rows: 3 }}>
                                            Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                                            Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
                                            a design language for background applications, is refined by Ant UED Team. Ant Design, a
                                            design language for background applications, is refined by Ant UED Team. Ant Design, a design
                                            language for background applications, is refined by Ant UED Team. Ant Design, a design
                                            language for background applications, is refined by Ant UED Team.
                                        </Paragraph>
                                        <div>
                                            <Text type='secondary'>-John Doe</Text>
                                        </div>
                                        <Rate defaultValue={3} disabled />
                                    </div>
                                </div>
                            </Col>
                            <Col xs={{ span: 0 }} lg={{ span: 8 }} xl={{ span: 6 }}>
                                <div className='course-card'>
                                    <div className='course-card-top'></div>
                                    <div className='course-card-body'>
                                        <h1>Course 3</h1>
                                        <Paragraph ellipsis={{ rows: 3 }}>
                                            Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                                            Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
                                            a design language for background applications, is refined by Ant UED Team. Ant Design, a
                                            design language for background applications, is refined by Ant UED Team. Ant Design, a design
                                            language for background applications, is refined by Ant UED Team. Ant Design, a design
                                            language for background applications, is refined by Ant UED Team.
                                        </Paragraph>
                                        <div>
                                            <Text type='secondary'>-John Doe</Text>
                                        </div>
                                        <Rate defaultValue={3} disabled />
                                    </div>
                                </div>
                            </Col>
                            <Col xs={{ span: 0 }} xl={{ span: 6 }}>
                                <div className='course-card'>
                                    <div className='course-card-top'></div>
                                    <div className='course-card-body'>
                                        <h1>Course 4</h1>
                                        <Paragraph ellipsis={{ rows: 3 }}>
                                            Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                                            Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
                                            a design language for background applications, is refined by Ant UED Team. Ant Design, a
                                            design language for background applications, is refined by Ant UED Team. Ant Design, a design
                                            language for background applications, is refined by Ant UED Team. Ant Design, a design
                                            language for background applications, is refined by Ant UED Team.
                                        </Paragraph>
                                        <div>
                                            <Text type='secondary'>-John Doe</Text>
                                        </div>
                                        <Rate defaultValue={3} disabled />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Layout>
            </Layout>
        );
    }
}

export default CourseDetailLarge;