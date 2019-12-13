import React, { } from 'react';
import { Layout, Form, Input, Button } from 'antd';

const ReferenceForm = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                props.addRef(values);
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
                            rules: [{ message: 'Please input a Text!' }],
                        })(
                            <Input size='large' placeholder='Algo-use' />,
                        )}
                    </Form.Item>

                    <Form.Item label='Link'>
                        {getFieldDecorator('link', {
                            rules: [{ message: 'Please input a link!' }],
                        })(
                            <Input size='large' placeholder='www.somesite.com' />,
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

const WrappedNormalReferenceForm = Form.create({ name: 'referenceForm' })(ReferenceForm);

export default WrappedNormalReferenceForm;