import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Layout, Form, Icon, Input, Button, Row, Col, Typography } from 'antd';
import { AuthContext } from '../store/Contexts/auth';

const { Title } = Typography;

const StudentSignupPage = (props) => {
    const { auth, handleCreateAccount } = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                if (props.match.params.accountType.toLowerCase() === 'tutor') {
                    values.role = 'tutor'
                    handleCreateAccount(values);
                    // props.history.push('/login');
                } else {
                    values.role = 'student'
                    handleCreateAccount(values);
                    // props.history.push('/login');
                }
            }
        });
    };

    const { getFieldDecorator } = props.form;
    if (auth) {
        return <Redirect to='/dashboard' />
    }
    return (
        <Layout className='layout' >
            <div style={{ marginTop: '100px', minHeight: 'calc(100vh - 233px)' }}>
                <div className='form-wrappwe'>
                    <Row>
                        <Col xs={{ span: 24 }} xl={{ span: 10 }}>
                            <div className='form-img' style={{ backgroundColor: '#89A6FB' }}>

                            </div>
                        </Col>
                        <Col xs={{ span: 24 }} xl={{ span: 14 }}>
                            <div className='form-contantin'>
                                <Title className='large-text bold' style={{ textAlign: 'center' }}>Create an account</Title>
                                <Form onSubmit={handleSubmit} className='login-form'>
                                    <Row gutter={{ md: 24 }}>
                                        <Col xs={24} md={12}>
                                            <Form.Item label='First Name'>
                                                {getFieldDecorator('firstname', {
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
                                            <Form.Item label='Last Name'>
                                                {getFieldDecorator('lastname', {
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

                                    <Form.Item label='Email Address'>
                                        {getFieldDecorator('email', {
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
                                    <Form.Item label='Password'>
                                        {getFieldDecorator('password', {
                                            rules: [{ required: true, message: 'Please input your Password!' }],
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
                                        <Link to='/login'>Already a member?</Link>
                                    </Form.Item>
                                    <Form.Item>
                                        <Button size='large' block type='primary' htmlType='submit' className='login-form-button'>
                                            Sign up
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Layout>
    );
}

const WrappedNormalSignupForm = Form.create({ name: 'signup' })(StudentSignupPage);

export default WrappedNormalSignupForm;