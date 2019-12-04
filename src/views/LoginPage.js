import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Form, Icon, Input, Button, Row, Col } from 'antd';
import '../styles/forms.css'



class LoginPage extends Component {
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
            <Layout className='layout' >
                <div style={{ marginTop: '100px', minHeight: 'calc(100vh - 233px)' }}>
                    <div style={{ margin: '50px auto', maxWidth: '500px' }}>
                        <p className='large-text bold'>Login</p>
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
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input
                                        prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type='password'
                                        placeholder='Password' onChange={this.handleTextChange} id='passowrd'
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                <Row>
                                    <Col span={12}>
                                        <div style={{ float: 'left' }}>
                                            <Link to=''>Forgot password</Link>
                                        </div>
                                    </Col>
                                    <Col span={12}>
                                        <div style={{ float: 'right' }}>
                                            <Button type='primary' htmlType='submit' className='login-form-button'>
                                                Log in
                                            </Button>
                                            <span style={{ marginLeft: 10 }}>
                                                Or <Link to=''>register now!</Link>
                                            </span>
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
}

const WrappedNormalLoginForm = Form.create({ name: 'login' })(LoginPage);

export default WrappedNormalLoginForm;