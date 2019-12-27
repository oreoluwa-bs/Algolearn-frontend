import React from 'react';
import { Layout, Form, Icon, Input, Button, Row, Col, Typography } from 'antd';

const { TextArea } = Input;
const { Content } = Layout;
const { Title, Text } = Typography;

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
            <div style={{ margin: '100px auto', minWidth: '80vw' }}>
                <Content>
                    <Row>
                        <Col xs={{ span: 24, order: 2 }} xl={{ span: 12, order: 1 }}>
                            <div>
                                <Title level={2} style={{ marginBottom: 20 }}>Getting in touch is easy!</Title>
                                <Text>KM. 10 Idiroko Road, Canaan Land,<br />
                                    Ota, Ogun State,Nigeria</Text>
                                <br /><br />
                                <Text>AlgoLearnbeta@gmail.com</Text>
                                <br />
                                <Text><Icon type="phone" /> +234 903 355 0046</Text>
                                <br />
                                <div className='address-map'></div>
                            </div>
                        </Col>
                        <Col xs={{ span: 24, order: 1 }} xl={{ span: 12, order: 2 }}>
                            <div>
                                {/* <Title className='large-text bold' style={{ textAlign: 'center' }}>Login</Title> */}
                                <Form onSubmit={handleSubmit} className='login-form'>
                                    <Form.Item label='Name'>
                                        {getFieldDecorator('Name', {
                                            rules: [{ required: true, message: 'Please input your first name!' }],
                                        })(
                                            <Input
                                                size='large'
                                                type='text'
                                                placeholder='John Doe'
                                            />,
                                        )}
                                    </Form.Item>
                                    <Form.Item label='Email Address'>
                                        {getFieldDecorator('email', {
                                            rules: [{ required: true, message: 'Please input your email!' }],
                                        })(
                                            <Input
                                                type='email'
                                                size='large'
                                                prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                placeholder='john.doe@gmail.com'
                                            />,
                                        )}
                                    </Form.Item>
                                    <Form.Item label='Message'>
                                        {getFieldDecorator('message', {
                                            rules: [{ required: true, message: 'Please input your message!' }],
                                        })(
                                            <TextArea autoSize={{ minRows: 8 }}
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
                        </Col>
                    </Row>
                </Content>
            </div>
            {/* <div style={{ margin: '50px auto', maxWidth: '540px', padding:'0 40px' }}>
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
            </div> */}
        </Layout>
    );
}

const WrappedNormalContactForm = Form.create({ name: 'constact' })(ContactView);

export default WrappedNormalContactForm;