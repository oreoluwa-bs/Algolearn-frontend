import React, { useContext } from 'react';
import { Layout, Form, Icon, Input, Button, Row, Col, Radio } from 'antd';
import '../styles/forms.css'
import { AuthContext } from '../store/Contexts/auth';


const AccountPage = (props) => {
    const { auth } = useContext(AuthContext);
    const handleSubmit = (e) => {
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
                <div style={{ margin: '50px auto', maxWidth: '540px', padding: '0 40px' }}>
                    <p className='large-text bold'>Manage Account</p>
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
                        <Form.Item>
                            <label>Account Type:</label>
                            <br />
                            {getFieldDecorator('radio-button', {
                                initialValue: auth.role
                            })(
                                <Radio.Group name="radiogroup">
                                    <Radio value='student'>Student</Radio>
                                    <Radio value='tutor'>Tutor</Radio>
                                </Radio.Group>,
                            )}
                        </Form.Item>

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
                            <Button size='large' block type='primary' htmlType='submit' className='login-form-button'>
                                Save
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </Layout>
    );
}

const WrappedNormalAccountPageForm = Form.create({ name: 'account' })(AccountPage);

export default WrappedNormalAccountPageForm;