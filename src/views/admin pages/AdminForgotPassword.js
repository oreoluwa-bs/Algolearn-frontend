import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Layout, Form, Icon, Input, Button, Row, Col, Typography } from 'antd';
import { AuthContext } from '../../store/Contexts/auth';
import { AdminUserContext } from '../../store/Contexts/admin';

const { Title } = Typography;

const AdminForgotPassword = (props) => {
    const { auth } = useContext(AuthContext);
    const { handleForgotPassword } = useContext(AdminUserContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                handleForgotPassword(values);
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
                            <div className='form-img' style={{ backgroundColor: '#16E0BD' }}>

                            </div>
                        </Col>
                        <Col xs={{ span: 24, order: 1 }} xl={{ span: 14, order: 2 }}>
                            <div className='form-contantin'>
                                <Title className='large-text bold' style={{ textAlign: 'center' }}>Forgot password</Title>
                                <Form onSubmit={handleSubmit} className='login-form' hideRequiredMark>
                                    <Form.Item label='Email Address' style={{ marginTop: 30 }}>
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
                                    <Form.Item>
                                        <Button size='large' type='primary' block htmlType='submit' className='login-form-button'>
                                            Reset Password
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

const WrappedNormalAdminForgotPasswordForm = Form.create({ name: 'forgor-password' })(AdminForgotPassword);

export default WrappedNormalAdminForgotPasswordForm;