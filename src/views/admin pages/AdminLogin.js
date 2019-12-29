import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Layout, Form, Icon, Input, Button, Row, Col, Typography } from 'antd';
// import { AdminUserContext } from '../../store/Contexts/admin';
import { AuthContext } from '../../store/Contexts/auth';

const { Title } = Typography;

const AdminLoginPage = (props) => {
    // const { auth, handleLogin } = useContext(AdminUserContext);
    const { auth, handleAdminLogin } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                handleAdminLogin(values);
                props.history.push('/admin/dashboard');
            }
        });
    };
    const { getFieldDecorator } = props.form;

    if (auth && auth.role === 'admin') {
        return <Redirect to='/admin/dashboard' />
    }
    return (
        <Layout className='layout' >
            <div style={{ marginTop: '100px', minHeight: 'calc(100vh - 233px)' }}>
                <div className='form-wrappwe'>
                    <Row>
                        <Col xs={{ span: 24, order: 2 }} xl={{ span: 10, order: 1 }}>
                            <div className='form-img' style={{ backgroundColor: '#F7A072' }}>

                            </div>
                        </Col>
                        <Col xs={{ span: 24, order: 1 }} xl={{ span: 14, order: 2 }}>
                            <div style={{ padding: 50 }}>
                                <Title className='large-text bold' style={{ textAlign: 'center' }}>Login</Title>
                                <Form onSubmit={handleSubmit} className='login-form' hideRequiredMark>
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
                                        <div style={{ float: 'left' }}>
                                            <Link to=''>Forgot password?</Link>
                                        </div>
                                    </Form.Item>
                                    <Form.Item>
                                        <Button size='large' type='primary' block htmlType='submit' className='login-form-button'>
                                            Log in
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

const WrappedNormalAdminLoginForm = Form.create({ name: 'admin-login' })(AdminLoginPage);

export default WrappedNormalAdminLoginForm;