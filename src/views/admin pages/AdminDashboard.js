import React, { useContext, useState, useEffect } from 'react';
import { Layout, Icon, Statistic, Card, Col, Row, Table, Tooltip, Button, Popconfirm } from 'antd';
import { CourseContext } from '../../store/Contexts/course';
import { ColorContext } from '../../store/Contexts/colors';
import { Link, Redirect } from 'react-router-dom';
import { AdminUserContext } from '../../store/Contexts/admin';
import { AuthContext } from '../../store/Contexts/auth';

const { Content } = Layout;

const AdminDashboard = (props) => {
    const { auth } = useContext(AuthContext);
    const { courses } = useContext(CourseContext);
    const { reportedCoursesMain, getReportedCourses, getAllUsers, usersNum } = useContext(AdminUserContext);
    const { colors_bg, colors_random } = useContext(ColorContext);
    const [reportedCourses, setReportedCourses] = useState([]);
    const [allUsers, setallUsers] = useState(0);

    useEffect(() => {
        getReportedCourses();
    }, [getReportedCourses]);

    useEffect(() => {
        getAllUsers();
    }, [getAllUsers]);

    useEffect(() => {
        setReportedCourses(reportedCoursesMain);
    }, [reportedCoursesMain]);

    useEffect(() => {
        setallUsers(usersNum);
    }, [usersNum]);

    if (!auth) {
        return <Redirect to='/admin/login' />
    }
    return (
        <Layout className='admin-dashboard'>
            <Content className='admin-dashboard-main'>
                <div style={{ background: '#fff', minHeight: 'calc(100vh - 185px)', width: '100%' }}>
                    <div>
                        <Layout>
                            <Content className='admin-dashboard-content'>
                                <h4 style={{ marginBottom: 16, fontSize: '1.1rem' }}>Stats</h4>
                                <div style={{ background: '#ECECEC', padding: '30px' }}>
                                    <Row gutter={16}>
                                        <Col span={8}>
                                            <Card>
                                                <Statistic
                                                    title='Users'
                                                    value={allUsers}
                                                    valueStyle={{ color: colors_bg[colors_random()] }}
                                                    prefix={<Icon type='user' />}
                                                />
                                            </Card>
                                        </Col>
                                        <Col span={8}>
                                            <Card>
                                                <Statistic
                                                    title='Courses'
                                                    value={courses.length}
                                                    valueStyle={{ color: colors_bg[colors_random()] }}
                                                    prefix={<Icon type='book' />}
                                                />
                                            </Card>
                                        </Col>
                                        <Col span={8}>
                                            <Card>
                                                <Statistic
                                                    title='Reported Courses'
                                                    value={reportedCourses.length}
                                                    // valueStyle={{ color: '#cf1322' }}
                                                    valueStyle={{ color: colors_bg[colors_random()] }}
                                                />
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>
                                <div style={{ marginTop: 50 }}>
                                    <h4 style={{ marginBottom: 16, fontSize: '1.1rem' }}>Reported Courses</h4>
                                    <Table rowKey={(record) => record._id} showHeader={true} tableLayout='fixed' dataSource={reportedCourses} columns={[
                                        {
                                            title: 'Course Id',
                                            dataIndex: 'courseId',
                                            key: 'courseId',
                                            render: (courseId) => <Link to={`/classroom/${courseId}/1`}>{courseId}</Link>
                                        },
                                        {
                                            title: 'Title',
                                            dataIndex: 'title',
                                            key: 'title',
                                        },
                                        {
                                            title: 'Reason',
                                            dataIndex: 'reason',
                                            key: 'reason',
                                        },
                                        {
                                            title: 'Action',
                                            key: 'action',
                                            render: () => (
                                                <span>
                                                    <Tooltip title='Delete this course' key='del-button'>
                                                        <Popconfirm
                                                            title="Are you sure delete this course?"
                                                            onConfirm={() => {
                                                                // handleDeleteLesson(course._id, lesson.key);
                                                            }}
                                                            onCancel={null}
                                                            okText="Yes"
                                                            cancelText="No"
                                                        >
                                                            <Button type='danger' icon='delete' />
                                                        </Popconfirm>
                                                    </Tooltip>
                                                </span>
                                            ),
                                        },
                                    ]
                                    } />
                                </div>
                            </Content>
                        </Layout>
                    </div>
                </div>
            </Content>
        </Layout>
    );
}

export default AdminDashboard;