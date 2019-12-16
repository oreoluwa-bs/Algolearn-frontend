import React from 'react';
import { Layout, Form, Icon, Input, Button } from 'antd';

const { TextArea } = Input;

const EditCoursePage = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                props.handleEditCourse(props.course._id, values);
                props.closeModal(false);
            }
        });
    };
    const { getFieldDecorator } = props.form;
    return (
        <Layout>
            <div style={{ margin: '30px', backgroundColor: 'white', padding: '20px' }}>
                <Form onSubmit={handleSubmit} className='login-form'>
                    <Form.Item label='Title'>
                        {getFieldDecorator('title', {
                            initialValue: props.course.title,
                            rules: [{ required: true, message: 'Please input a title for this course' }],
                        })(
                            <Input size='large' prefix={<Icon type='book' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder='Algorithms 101' />,
                        )}
                    </Form.Item>
                    <Form.Item label='Description'>
                        {getFieldDecorator('description', {
                            initialValue: props.course.description,
                            rules: [{ required: true, message: 'Please input course description!' }],
                        })(
                            <TextArea autoSize={{ minRows: 16 }} size='large' />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button style={{ float: 'right' }} size='large' type='primary' htmlType='submit'>
                            Save
                            </Button>
                    </Form.Item>
                </Form>
            </div>
        </Layout >
    );
}

const WrappedNormalEditCourseForm = Form.create({ name: 'editcourse' })(EditCoursePage);

export default WrappedNormalEditCourseForm;