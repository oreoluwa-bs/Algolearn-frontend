import React, { useState, useContext } from 'react';
import { Layout, Form, Icon, Input, Button, Upload, Table, Tooltip, Divider, Modal, message, Popconfirm } from 'antd';
import WrappedNormalReferenceForm from '../components/Misc/ReferenceForm';
import { CourseContext } from '../store/Contexts/course';
import WrappedNormalEditReferenceForm from '../components/Misc/EditRefForm';

const { TextArea } = Input;
const { Dragger } = Upload;

const CreateLessonPage = (props) => {
    const { handleCreateLesson } = useContext(CourseContext);
    const [refModal, setRefModal] = useState(false);
    const [editRefModal, setEditRefModal] = useState(false);
    const [refdata, setRefData] = useState([]);
    const [filedata, setFileData] = useState(null);
    const [videoDataAsURL, setVideoDataAsURL] = useState();

    const handleLessonSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            values.references = refdata;
            values.vid = filedata;
            values.videoUrl = videoDataAsURL;
            if (!err) {
                // console.log(props);
                handleCreateLesson(props.match.params.courseId, values);
                props.history.push(`/catalogue/${props.match.params.courseId}`);
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

    const editRef = (ref) => {
        let tempOpt = refdata;
        const ind = refdata.findIndex((opt) => {
            return opt.key === ref.key;
        });
        if (ind !== -1) {
            tempOpt[ind] = ref;
            setFileData(tempOpt);
        }
        setEditRefModal(false);
    }

    const deleteRef = (ref) => {
        const newRefdata = refdata.filter((opt) => {
            return opt.key !== ref.key;
        });
        setRefData(newRefdata);
    }

    return (
        <Layout>
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
                    <Form.Item label={
                        <span>Video Upload&nbsp;
                        <Tooltip title='Only upload a single video'>
                                <Icon type='question-circle-o' />
                            </Tooltip>
                        </span>
                    }>
                        {getFieldDecorator('video', {
                            valuePropName: 'vidUpload',
                        })(
                            <Dragger
                                accept='video/*,.mkv'
                                listType='picture'
                                beforeUpload={(file) => {
                                    console.log(file.type);
                                    if (file.type.includes('video')) {
                                        const reader = new FileReader();
                                        reader.readAsDataURL(file);
                                        reader.onload = (e) => {
                                            const asUrl = e.target.result;
                                            message.success(`${file.name} file uploaded successfully.`);
                                            setVideoDataAsURL(asUrl);
                                        }
                                        setFileData(file);
                                    } else {
                                        message.error(`${file.name} file uploaded failed.`);
                                        setFileData(null);
                                        setVideoDataAsURL(null);
                                    }
                                    return false;
                                }}
                                name='vid-upload'


                                file={filedata && filedata.file ? filedata.file : null}
                                onChange={(info) => {
                                    if (info.fileList.length > 1) {
                                        info.fileList.shift();
                                    }
                                    if (!info.file.type.includes('video')) {
                                        info.fileList.shift();
                                    }
                                }}
                                showUploadList={{
                                    showDownloadIcon: false,
                                    showPreviewIcon: false,
                                }}
                                onRemove={() => {
                                    setFileData(null);
                                    setVideoDataAsURL(null);
                                }}
                            >
                                {
                                    !filedata &&
                                    <span>
                                        <p className='ant-upload-drag-icon'>
                                            <Icon type='inbox' />
                                        </p>
                                        <p className='ant-upload-text'>Click or drag file to this area to upload</p>
                                        <p className='ant-upload-hint'>Support for a single upload.</p>
                                    </span>
                                }
                                {
                                    filedata &&
                                    <span>
                                        <p className='ant-upload-drag-icon'>
                                            <Icon type='inbox' />
                                        </p>
                                        <p className='ant-upload-text'>{filedata.name}</p>
                                    </span>
                                }
                            </Dragger>,
                        )}
                    </Form.Item>
                    <Form.Item label={
                        <span>Text Content&nbsp;
                        <Tooltip title={
                                <span>For more customization write in markdown.
                                Check <a href='https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet'>Markdown Guide</a> for more information
                                </span>
                            }>
                                <Icon type='question-circle-o' />
                            </Tooltip>
                        </span>
                    }>
                        {getFieldDecorator('content', {
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
                                    <a href={'https://' + text}>{text}</a>
                                ),
                            },
                            {
                                title: 'Action',
                                key: 'action',
                                render: (ref) => (
                                    <span>
                                        <Tooltip title='Delete this lesson' key='del-button'>
                                            <Popconfirm
                                                title='Are you sure delete this reference?'
                                                onConfirm={() => deleteRef(ref)}
                                                onCancel={null}
                                                okText='Yes'
                                                cancelText='No'
                                            >
                                                <Button type='danger' icon='delete' />
                                            </Popconfirm>
                                        </Tooltip>
                                        <Divider type='vertical' />
                                        <Tooltip title='Edit this lesson' key='edit-button'>
                                            <Button type='primary' icon='edit' onClick={() => setEditRefModal(true)} />
                                            <Modal
                                                title='Edit option'
                                                visible={editRefModal}
                                                onOk={() => setEditRefModal(false)}
                                                onCancel={() => setEditRefModal(false)}
                                                footer={null}
                                            >
                                                <WrappedNormalEditReferenceForm editRef={editRef} reference={ref} />
                                            </Modal>
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