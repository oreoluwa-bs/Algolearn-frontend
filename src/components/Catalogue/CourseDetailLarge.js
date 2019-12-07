import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Rate, Typography, Button, Layout, Row, Col, Avatar, Icon } from 'antd';
import WrappedNormalContactForm from '../Misc/ContactView';
import CourseDetailSmall from './CourseDetailSmall';

const { Paragraph, Text, Title } = Typography;
const { Content } = Layout;

class CourseDetailLarge extends Component {
    state = {}
    render() {
        return (
            <div>
                <Layout style={{ backgroundColor: 'white', borderTop: '1px solid  rgb(235, 237, 240)' }}>
                    <div style={{ backgroundColor: 'firebrick' }} className='course-header'>
                        <div className='course-header-container'>
                            <Icon type="book" />
                            <Title level={1} style={{ color: 'white' }}>Course 2</Title>
                        </div>
                    </div>
                    <Content style={{ backgroundColor: 'white', margin: '100px auto', maxWidth: '80vw' }}>
                        <Row gutter={{ xs: 10, md: 28, lg: 36, xl: 48 }}>
                            <Col xs={{ span: 24 }} md={{ span: 16 }}>
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
                                        <div className='enroll-btn'>
                                            <Button type='primary' size='large'>Enroll in course</Button>
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
                                    <Link to=''>
                                        <CourseDetailSmall />
                                    </Link>
                                </Col>
                                <Col xs={{ span: 0 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}>
                                    <CourseDetailSmall />
                                </Col>
                                <Col xs={{ span: 0 }} lg={{ span: 8 }} xl={{ span: 6 }}>
                                    <CourseDetailSmall />
                                </Col>
                                <Col xs={{ span: 0 }} xl={{ span: 6 }}>
                                    <CourseDetailSmall />
                                </Col>
                            </Row>
                        </div>
                    </Layout>
                </Layout>
                <WrappedNormalContactForm />
            </div>
        );
    }
}

export default CourseDetailLarge;