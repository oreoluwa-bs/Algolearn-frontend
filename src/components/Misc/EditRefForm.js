import React, { } from 'react';
import { Layout, Form, Input, Button } from 'antd';

const EditReferenceForm = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                props.editRef({ ...props.reference, ...values });
            }
        });
    };
    const { getFieldDecorator } = props.form;
    return (
        <Layout style={{ backgroundColor: 'white' }}>
            <div>
                <Form onSubmit={handleSubmit} className='login-form'>
                    <Form.Item label='Reference'>
                        {getFieldDecorator('reference', {
                            initialValue: props.reference.reference,
                            rules: [{ message: 'Please input a Text!' }],
                        })(
                            <Input size='large' />,
                        )}
                    </Form.Item>

                    <Form.Item label='Link'>
                        {getFieldDecorator('link', {
                            initialValue: props.reference.link,
                            rules: [{ message: 'Please input a link!' }],
                        })(
                            <Input size='large' />,
                        )}
                    </Form.Item>

                    <Form.Item>
                        <Button style={{ float: 'right' }} size='large' type='primary' onClick={handleSubmit}>
                            Save
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Layout>
    );
}

const WrappedNormalEditReferenceForm = Form.create({ name: 'referenceEditForm' })(EditReferenceForm);

export default WrappedNormalEditReferenceForm;