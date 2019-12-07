import React, { } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Form, Icon, Input, Button, Row, Col } from 'antd';
import '../styles/forms.css'


const TutorSignupPage = (props) => {
    const handleSubmit = (e) => {
        // console.log(this.state);
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
            }
        });
    };
    const { getFieldDecorator } = props.form;
    return (
        <Layout className='layout' >
            <div style={{ marginTop: '100px', minHeight: 'calc(100vh - 233px)' }}>
                <div style={{ margin: '50px auto', maxWidth: '500px' }}>
                    <p className='large-text bold'>Create an account</p>
                    <Form onSubmit={handleSubmit} className='login-form'>
                        <Row gutter={{ md: 24 }}>
                            <Col span={12}>
                                <Form.Item>
                                    <label>First Name:</label>
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
                            <Col span={12}>
                                <Form.Item>
                                    <label>Last Name:</label>
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

                        <Form.Item>
                            <label>Email Address:</label>
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
                        <Form.Item>
                            <label>Password:</label>
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
                            <Row>
                                <Col span={12}>
                                    <div style={{ float: 'left' }}>
                                        <Link to='/login'>Already have an account?</Link>
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div style={{ float: 'right' }}>
                                        <Button type='primary' htmlType='submit' className='login-form-button'>
                                            Sign up
                                            </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </Layout>
    );
}

const WrappedNormalTutorSignupForm = Form.create({ name: 'signup' })(TutorSignupPage);

export default WrappedNormalTutorSignupForm;