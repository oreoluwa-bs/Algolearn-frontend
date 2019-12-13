import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Form, Icon, Input, Button, Upload, Table, Tooltip, Divider, Modal, message } from 'antd';
import WrappedNormalReferenceForm from '../components/Misc/ReferenceForm';

const { TextArea } = Input;
const { Dragger } = Upload;

const CreateLessonPage = (props) => {
    const [refModal, setRefModal] = useState(false);
    const [refdata, setRefData] = useState([]);

    const handleLessonSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            values.references = refdata;
            if (!err) {
                console.log(values);
            }
        });
    };
    const { getFieldDecorator } = props.form;

    const addRef = (ref) => {
        const format = {
            key: Math.random() * 12,
            reference: ref.reference || null,
            link: ref.link || null,
        };
        setRefData([...refdata, format]);
        setRefModal(false);
    }

    return (
        <Layout style={{}} >
            <div style={{ margin: '50px 50px 0', backgroundColor: 'white', padding: '40px 40px' }}>
                <Form onSubmit={handleLessonSubmit} className='login-form'>
                    <Form.Item label='Title'>
                        {getFieldDecorator('title', {
                            rules: [{ required: true, message: 'Please input a title for this course' }],
                        })(
                            <Input
                                size='large'
                                prefix={<Icon type='book' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder='Algorithms 101'
                            />,
                        )}
                    </Form.Item>
                    <Form.Item label='Video Upload'>
                        {getFieldDecorator('video', {
                            valuePropName: 'vidUpload',
                        })(
                            <Dragger multiple={false}
                                accept='video/mp4,video/x-m4v,video/*'
                                action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
                                onChange={(info) => {
                                    const { status } = info.file;
                                    if (status === 'done') {
                                        message.success(`${info.file.name} file uploaded successfully.`);
                                    } else if (status === 'error') {
                                        message.error(`${info.file.name} file upload failed.`);
                                    }
                                }}
                                name="vid-upload">
                                <p className="ant-upload-drag-icon">
                                    <Icon type="inbox" />
                                </p>
                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                <p className="ant-upload-hint">Support for a single upload.</p>
                            </Dragger>,
                        )}
                    </Form.Item>
                    <Form.Item label='Text Content'>
                        {getFieldDecorator('lesson-description', {
                            rules: [{ message: 'Please input lesson content!' }],
                        })(<TextArea autoSize={{ minRows: 20 }} size='large' />)}
                    </Form.Item>
                    <Form.Item label='References'>
                        <Button style={{ float: 'right', marginTop: -30, marginBottom: 10 }} type='primary' size='small' icon='plus' onClick={() => setRefModal(true)} />
                        <Modal
                            title='Add reference'
                            visible={refModal}
                            onOk={addRef}
                            onCancel={() => setRefModal(false)}
                            footer={null}
                        >
                            <WrappedNormalReferenceForm addRef={addRef} />
                        </Modal>
                        <Table dataSource={refdata} columns={[
                            {
                                title: 'Reference',
                                dataIndex: 'reference',
                                key: 'reference',
                            },
                            {
                                title: 'Link',
                                dataIndex: 'link',
                                key: 'link',
                                render: (text) => (
                                    <Link to={'https://' + text}>{text}</Link>
                                ),
                            },
                            {
                                title: 'Action',
                                key: 'action',
                                render: () => (
                                    <span>
                                        <Tooltip title='Delete this lesson' key='del-button'>
                                            <Button type='danger' icon='delete' />
                                        </Tooltip>
                                        <Divider type='vertical' />
                                        <Tooltip title='Edit this lesson' key='edit-button'>
                                            <Button type='primary' icon='edit' />
                                        </Tooltip>
                                    </span>
                                ),
                            },
                        ]} />
                    </Form.Item>
                    <Form.Item>
                        <Button style={{ float: 'right' }} size='large' type='primary' htmlType='submit' className='login-form-button'>
                            Create lesson
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Layout >
    );
}

const WrappedNormalCreateLessonForm = Form.create({ name: 'createlesson' })(CreateLessonPage);

export default WrappedNormalCreateLessonForm;