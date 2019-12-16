import React from 'react';
import { Layout, Form, Icon, Input, Button, Row, Col } from 'antd';

const { TextArea } = Input;

const ContactView = (props) => {
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
        <Layout className='layout' style={{ backgroundColor: 'white' }} >
            <div style={{ margin: '50px auto', maxWidth: '540px', padding:'0 40px' }}>
                <p className='large-text bold'>Get in Touch</p>
                <Form onSubmit={handleSubmit} className='login-form'>
                    <Row gutter={{ md: 24 }}>
                        <Col xs={24} md={12}>
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
                        <Col xs={24} md={12}>
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
                                type='email'
                                size='large'
                                prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder='email' id='email'
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <label>Message:</label>
                        {getFieldDecorator('message', {
                            rules: [{ required: true, message: 'Please input your message!' }],
                        })(
                            <TextArea autoSize={{ minRows: 4 }}
                                size='large'
                                id='message'
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button size='large' block type='primary' htmlType='submit' className='login-form-button'>
                            Send us a mail
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Layout>
    );
}

const WrappedNormalContactForm = Form.create({ name: 'constact' })(ContactView);

export default WrappedNormalContactForm;