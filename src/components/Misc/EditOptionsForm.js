import React, { } from 'react';
import { Layout, Form, Input, Button } from 'antd';

const EditOptionsForm = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                props.editOption({ ...props.option, ...values });
            }
        });
    };
    const { getFieldDecorator } = props.form;
    return (
        <Layout style={{ backgroundColor: 'white' }}>
            <div>
                <Form onSubmit={handleSubmit} className='login-form'>
                    <Form.Item label='Text'>
                        {getFieldDecorator('text', {
                            initialValue: props.option.text,
                            rules: [{ required: true, message: 'Please input a Text!' }],
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

const WrappedNormalEditOptionsForm = Form.create({ name: 'optionsFormEdit' })(EditOptionsForm);

export default WrappedNormalEditOptionsForm;