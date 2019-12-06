import React, { Component } from 'react';
import { Layout, Form, Icon, Input, Button, Row, Col } from 'antd';

const { TextArea } = Input;

class ContactView extends Component {
    state = {

    }
    handleSubmit = (e) => {
        // console.log(this.state);
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
            }
        });
    };

    handleTextChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Layout className='layout' style={{ backgroundColor: 'white' }} >
                <div style={{ margin: '50px auto', maxWidth: '500px' }}>
                    <p className='large-text bold'>Get in Touch</p>
                    <Form onSubmit={this.handleSubmit} className='login-form'>
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
                                            placeholder='John' onChange={this.handleTextChange} id='firstname'
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
                                            placeholder='Doe' onChange={this.handleTextChange} id='lastname'
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
                                    placeholder='email' onChange={this.handleTextChange} id='email'
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
                                    onChange={this.handleTextChange} id='message'
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <div style={{ float: 'right' }}>
                                <Button type='primary' htmlType='submit' className='login-form-button'>
                                    Submit
                                    </Button>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </Layout>);
    }
}

const WrappedNormalContactForm = Form.create({ name: 'constact' })(ContactView);

export default WrappedNormalContactForm;