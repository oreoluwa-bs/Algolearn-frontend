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
            <Layout className='layout' style={{ bacor: 'white' }} >
                <div style={{ marginTop: '100px' }}>
                    <div style={{ margin: '50px auto', maxWidth: '500px' }}>
                        <p className='large-text bold'>Get in Touch</p>
                        <Form onSubmit={this.handleSubmit} className='login-form'>

                            <Form.Item>
                                {getFieldDecorator('email', {
                                    rules: [{ required: true, message: 'Please input your email!' }],
                                })(
                                    <Input
                                        type='email'
                                        prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder='email' onChange={this.handleTextChange} id='email'
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('message', {
                                    rules: [{ required: true, message: 'Please input your message!' }],
                                })(
                                    <TextArea rows={4}
                                        prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        onChange={this.handleTextChange} id='message'
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                <div style={{ float: 'right' }}>
                                    <Button type='primary' htmlType='submit' className='login-form-button'>
                                        Log in
                                    </Button>
                                </div>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Layout>);
    }
}

const WrappedNormalContactForm = Form.create({ name: 'constact' })(ContactView);

export default WrappedNormalContactForm;