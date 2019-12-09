import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Icon, Row, Col, Tabs } from 'antd';
import '../styles/dashboard.css';
import CourseDetailSmall from '../components/Catalogue/CourseDetailSmall';

const { Content } = Layout;
const { TabPane } = Tabs;


const Dashboard = () => {
    const [isCollapsed, setCollapsed] = useState(true)

    return (
        <Layout>
            <Layout style={{ margin: '50px 0 0' }}>
                <Content style={{ margin: '0 30px' }}>
                    <div style={{ padding: 24, background: '#fff', minHeight: 'calc(100vh - 184px)' }}>
                        <div className='dashboard-tabs'>
                            <Tabs tabBarExtraContent={[isCollapsed ? <Link to='/course/create' className='ant-btn ant-btn-default'>Create a course</Link> : null]}>
                                {
                                    isCollapsed &&
                                    <TabPane tab="Created Courses" key="created-courses">
                                        <Row gutter={{ xs: 10, md: 28, lg: 36, xl: 48 }}>
                                            <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 4 }} style={{ marginBottom: 40 }}>
                                                <Link to='/course/1'>
                                                    <CourseDetailSmall />
                                                </Link>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                }
                                <TabPane tab="Active Courses" key="active-courses">
                                    <Row gutter={{ xs: 10, md: 28, lg: 36, xl: 48 }}>
                                        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 4 }} style={{ marginBottom: 40 }}>
                                            <Link to='/classroom/1'>
                                                <CourseDetailSmall />
                                            </Link>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tab="Completed Courses" key="completed-courses">
                                    <Row gutter={{ xs: 10, md: 28, lg: 36, xl: 48 }}>
                                        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 4 }} style={{ marginBottom: 40 }}>
                                            <Link to='/classroom/1'>
                                                <CourseDetailSmall />
                                            </Link>
                                        </Col>
                                        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 4 }} style={{ marginBottom: 40 }}>
                                            <Link to=''>
                                                <CourseDetailSmall />
                                            </Link>
                                        </Col>
                                        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 4 }} style={{ marginBottom: 40 }}>
                                            <Link to=''>
                                                <CourseDetailSmall />
                                            </Link>
                                        </Col>
                                        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 4 }} style={{ marginBottom: 40 }}>
                                            <Link to=''>
                                                <CourseDetailSmall />
                                            </Link>
                                        </Col>
                                    </Row>
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