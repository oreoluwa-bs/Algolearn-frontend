import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Layout, Form, Icon, Input, Button, Row, Col, Typography } from 'antd';
// import { AdminUserContext } from '../../store/Contexts/admin';
import { AuthContext } from '../../store/Contexts/auth';

const { Title } = Typography;

const AdminSignupPage = (props) => {
    // const { auth, handleCreateAccount } = useContext(AdminUserContext);
    const { auth, handleAdminCreateAccount } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                values.role = 'admin';
                handleAdminCreateAccount(values);
                props.history.push('/admin/login');
            }
        });
    };

    const { getFieldDecorator } = props.form;
    // if (auth && auth.role === 'admin') {
    //     return <Redirect to='/admin/dashboard' />
    // }
    if (!auth) {
        return <Redirect to='/admin/login' />
    }
    return (
        <Layout className='layout' >
            <div style={{ marginTop: '100px', minHeight: 'calc(100vh - 233px)' }}>
                <div className='form-wrappwe'>
                    <Row>
                        <Col xs={{ span: 24 }} xl={{ span: 10 }}>
                            <div className='form-img' style={{ backgroundColor: '#F7C548' }}>

                            </div>
                        </Col>
                        <Col xs={{ span: 24 }} xl={{ span: 14 }}>
                            <div style={{ padding: 50 }}>
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
                                            />,
                                        )}
                                    </Form.Item>
                                    <Form.Item>
                                        <Link to='/admin/login'>Already an admin?</Link>
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

const WrappedNormalAdminSignupForm = Form.create({ name: 'signup' })(AdminSignupPage);

export default WrappedNormalAdminSignupForm;