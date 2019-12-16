import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Layout, Form, Icon, Input, Button, Row, Col, Typography } from 'antd';
import '../styles/forms.css';
import { AuthContext } from '../store/Contexts/auth';

const { Title, Text } = Typography;

const LoginPage = (props) => {
    const { auth, handleLogin } = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                handleLogin(values)
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
                        <Col xs={{ span: 24, order: 2 }} xl={{ span: 10, order: 1 }}>
                            <div className='form-img'>

                            </div>
                        </Col>
                        <Col xs={{ span: 24, order: 1 }} xl={{ span: 14, order: 2 }}>
                            <div style={{ padding: 50 }}>
                                <Title level={2} className='large-text bold' style={{ textAlign: 'center' }}>Login</Title>
                                <Form onSubmit={handleSubmit} className='login-form' hideRequiredMark>
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
                                                id='passowrd'
                                            />,
                                        )}
                                    </Form.Item>
                                    <Form.Item>
                                        <div style={{ float: 'left' }}>
                                            <Link to='' >Forgot password?</Link>
                                        </div>
                                    </Form.Item>
                                    <Form.Item>
                                        <Button size='large' type='primary' block htmlType='submit' className='login-form-button'>
                                            Log in
                                        </Button>
                                    </Form.Item>
                                    <Form.Item style={{ textAlign: 'center' }}>
                                        <Text type='secondary'>OR</Text>
                                        <br />
                                        <Text>Not a member? <Link to='/signup/student'>Student Sign up</Link> or <Link to='/signup/tutor'>Tutor Sign up</Link></Text>
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

const WrappedNormalLoginForm = Form.create({ name: 'login' })(LoginPage);

export default WrappedNormalLoginForm;