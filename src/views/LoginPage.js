import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Form, Icon, Input, Button, Checkbox } from 'antd';



class LoginPage extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Layout className="layout" >
                <div style={{ marginTop: '50px' }}>
                    <div>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(<Checkbox>Remember me</Checkbox>)}
                                <Link to=''>
                                    Forgot password
          </Link>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
          </Button>
                                Or <Link to=''>register now!</Link>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Layout>
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(LoginPage);

export default WrappedNormalLoginForm;