import React, { useContext } from 'react';
import { Layout, Form, Icon, Input, Button, Row, Col, Typography } from 'antd';
import { AuthContext } from '../../store/Contexts/auth';

const { TextArea } = Input;
const { Content } = Layout;
const { Title, Text } = Typography;

const ContactView = (props) => {
    const { handleContactUs } = useContext(AuthContext);

    const handleSubmit = (e) => {
        // console.log(this.state);
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                // console.log(values);
                handleContactUs(values);
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
                                <Text>algoLearnbeta@gmail.com</Text>
                                <br />
                                <Text><Icon type="phone" /> +234 903 355 0046</Text>
                                <br />
                                <div className='address-map'></div>
                            </div>
                        </Col>
                        <Col xs={{ span: 24, order: 1 }} xl={{ span: 12, order: 2 }}>
                            <div>
                                <Form onSubmit={handleSubmit} className='login-form'>
                                    <Form.Item label='Name'>
                                        {getFieldDecorator('name', {
                                            rules: [{ required: true, message: 'Please input your name!' }],
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
                                            rules: [{ required: true, message: 'Please input your email address!' }],
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
        </Layout>
    );
}

const WrappedNormalContactForm = Form.create({ name: 'constact' })(ContactView);

export default WrappedNormalContactForm;