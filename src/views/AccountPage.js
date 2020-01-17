import React, { useContext } from 'react';
import { Layout, Form, Icon, Input, Button, Row, Col, Radio, Typography, Card, Statistic } from 'antd';
import { AuthContext } from '../store/Contexts/auth';
import { Redirect } from 'react-router-dom';
import { ColorContext } from '../store/Contexts/colors';
import '../styles/forms.css'
import { CourseContext } from '../store/Contexts/course';

const { Title } = Typography;


const AccountPage = (props) => {
    const { auth, handleAccountUpdate } = useContext(AuthContext);
    const { courses } = useContext(CourseContext);
    const { colors_bg, colors_random } = useContext(ColorContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                if (values.password === undefined) {
                    values.password = null
                }
                handleAccountUpdate(auth._id, values);
            }
        });
    };

    const { getFieldDecorator } = props.form;

    if (!auth) {
        return <Redirect to='/' />
    }

    let enrolledCourses = [];
    let createdCourses = [];

    if (auth) {
        if (auth.role !== 'admin') {
            let ecourses = courses.filter(course => {
                return auth.enrolledCourses.find((co) => {
                    return co._id === course._id
                });
            });
            enrolledCourses = [...new Set(ecourses)];

            let ccreated = courses.filter(course => {
                return auth.createdCourses.find((co) => {
                    return co._id === course._id
                });
            });
            createdCourses = [...new Set(ccreated)];
        }
    }

    return (
        <Layout className='layout' >
            <div style={{ backgroundColor: colors_bg[colors_random()] }} className='course-header'>
                <div className='course-header-bg'></div>
                <div className='course-header-container'>
                    <Icon type='user' />
                    <Title level={1} style={{ color: 'white' }}>My Account</Title>
                </div>
            </div>
            <div style={{ backgroundColor: 'white' }}>
                <div style={{ margin: '100px auto', maxWidth: '70vw', padding: '0 40px' }}>
                    <Row gutter={{ xs: 10, md: 28, lg: 36, xl: 48 }}>
                        <Col xs={{ span: 24 }} md={{ span: 16 }}>
                            <div style={{ maxWidth: '80%' }}>
                                <Form onSubmit={handleSubmit} className='login-form'>
                                    <Row gutter={{ md: 24 }}>
                                        <Col xs={24} md={12}>
                                            <Form.Item>
                                                <label>First Name:</label>
                                                {getFieldDecorator('firstname', {
                                                    initialValue: auth.firstname,
                                                    rules: [{ required: true, message: 'Please input your first name!' }],
                                                })(
                                                    <Input
                                                        size='large'
                                                        type='text'
                                                        placeholder='John' id='firstname'
                                                    />,
                                                )}
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} md={12}>
                                            <Form.Item>
                                                <label>Last Name:</label>
                                                {getFieldDecorator('lastname', {
                                                    initialValue: auth.lastname,
                                                    rules: [{ required: true, message: 'Please input your last name!' }],
                                                })(
                                                    <Input
                                                        size='large'
                                                        type='text'
                                                        placeholder='Doe' id='lastname'
                                                    />,
                                                )}
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    {
                                        auth.role !== 'admin' &&
                                        <Form.Item>
                                            <label>Account Type:</label>
                                            <br />
                                            {getFieldDecorator('role', {
                                                initialValue: auth.role
                                            })(
                                                <Radio.Group name="radiogroup">
                                                    <Radio value='student'>Student</Radio>
                                                    <Radio value='tutor'>Tutor</Radio>
                                                </Radio.Group>,
                                            )}
                                        </Form.Item>
                                    }

                                    <Form.Item>
                                        <label>Email Address:</label>
                                        {getFieldDecorator('email', {
                                            initialValue: auth.email,
                                            rules: [{ required: true, message: 'Please input your email!' }],
                                        })(
                                            <Input
                                                size='large'
                                                type='email'
                                                prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                placeholder='john.d@gmail.com' id='email'
                                            />,
                                        )}
                                    </Form.Item>
                                    <Form.Item>
                                        <label>New Password:</label>
                                        {getFieldDecorator('password', {
                                            rules: [{ message: 'Please input your Password!' }],
                                        })(
                                            <Input
                                                size='large'
                                                prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                type='password'
                                                placeholder='' id='passowrd'
                                            />,
                                        )}
                                    </Form.Item>
                                    <Form.Item>
                                        <Button size='large' block type='primary' htmlType='submit'>
                                            Save
                            </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 8 }}>
                            <div className='course-add-info'>
                                <div className='course-add-body'>
                                    <Card bordered={false} title='Account Information'>
                                        {
                                            auth.role !== 'admin' &&
                                            <div className='course-add-meta'>
                                                {/* {
                                                course.tests && course.tests.length > 0 &&
                                                <div>
                                                    <Icon type='check-square' />
                                                    <Text type='secondary'>Interactive Quizes</Text>
                                                </div>
                                            } */}
                                                <Statistic title="Enrolled Courses" value={enrolledCourses.length} />
                                                {
                                                    auth.role === 'tutor' &&
                                                    <Statistic title="Created Courses" value={createdCourses.length} />
                                                }
                                            </div>
                                        }
                                    </Card>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Layout>
    );
}

const WrappedNormalAccountPageForm = Form.create({ name: 'account' })(AccountPage);

export default WrappedNormalAccountPageForm;