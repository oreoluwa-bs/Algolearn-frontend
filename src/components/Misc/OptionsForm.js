import React, { } from 'react';
import { Layout, Form, Input, Button } from 'antd';

const OptionsForm = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                props.addOption(values);
                props.form.resetFields();
            }
        });
        // console.log(values);
    };
    const { getFieldDecorator } = props.form;
    return (
        <Layout style={{ backgroundColor: 'white' }}>
            <div>
                <Form onSubmit={handleSubmit} className='login-form'>
                    <Form.Item label='Text'>
                        {getFieldDecorator('text', {
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

const WrappedNormalOptionsForm = Form.create({ name: 'optionsForm' })(OptionsForm);

export default WrappedNormalOptionsForm;