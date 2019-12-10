import React, { } from 'react';
// import { Link } from 'react-router-dom';
import { Layout, Form, Icon, Input, Button } from 'antd';
import '../styles/forms.css'

const { TextArea } = Input;

const CreateCoursePage = (props) => {
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
                    <p className='large-text bold'>Create a course</p>
                    <Form onSubmit={handleSubmit} className='login-form'>
                        <Form.Item>
                            <label>Title:</label>
                            {getFieldDecorator('course-title', {
                                rules: [{ required: true, message: 'Please input a title for this course' }],
                            })(
                                <Input
                                    size='large'
                                    prefix={<Icon type='book' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder='Algorithms 101'
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <label>Description:</label>
                            {getFieldDecorator('course-description', {
                                rules: [{ required: true, message: 'Please input course description!' }],
                            })(
                                <TextArea autoSize={{ minRows: 4 }}
                                    size='large'
                                    id='course-description'
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button block size='large' type='primary' htmlType='submit' className='login-form-button'>
                                Create course
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </Layout>
    );
}

const WrappedNormalCreateCourseForm = Form.create({ name: 'createcourse' })(CreateCoursePage);

export default WrappedNormalCreateCourseForm;