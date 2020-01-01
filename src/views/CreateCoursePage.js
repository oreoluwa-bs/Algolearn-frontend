import React, { useContext } from 'react';
import { Layout, Form, Icon, Input, Button } from 'antd';
import { CourseContext } from '../store/Contexts/course';
import { AuthContext } from '../store/Contexts/auth';
import { Redirect } from 'react-router-dom';

const { TextArea } = Input;

const CreateCoursePage = (props) => {
    const { auth } = useContext(AuthContext);
    const { handleCreateCourse } = useContext(CourseContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                handleCreateCourse(values);
                props.history.push('/dashboard');
            }
        });
    };
    const { getFieldDecorator } = props.form;

    if (!auth) {
        return <Redirect to='/dashboard' />
    }
    return (
        <Layout>
            <div style={{ margin: '50px 50px 0', backgroundColor: 'white', padding: '40px 40px' }}>
                <p className='large-text bold'>Create a course</p>
                <Form onSubmit={handleSubmit} className='login-form'>
                    <Form.Item label='Title'>
                        {getFieldDecorator('title', {
                            rules: [{ required: true, message: 'Please input a title for this course' }],
                        })(
                            <Input size='large' prefix={<Icon type='book' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder='Algorithms 101' />,
                        )}
                    </Form.Item>
                    <Form.Item label='Description'>
                        {getFieldDecorator('description', {
                            rules: [{ required: true, message: 'Please input course description!' }],
                        })(
                            <TextArea autoSize={{ minRows: 21 }} size='large' />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button style={{ float: 'right' }} size='large' type='primary' htmlType='submit'>
                            Create course
                            </Button>
                    </Form.Item>
                </Form>
            </div>
        </Layout >
    );
}

const WrappedNormalCreateCourseForm = Form.create({ name: 'createcourse' })(CreateCoursePage);

export default WrappedNormalCreateCourseForm;