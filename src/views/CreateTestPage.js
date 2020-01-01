import React, { useState, useContext } from 'react';
import { Layout, Form, Input, Button, Table, Tooltip, Divider, Modal, message, Popconfirm } from 'antd';
import WrappedNormalOptionsForm from '../components/Misc/OptionsForm';
import WrappedNormalEditOptionsForm from '../components/Misc/EditOptionsForm';
import { CourseContext } from '../store/Contexts/course';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../store/Contexts/auth';

const { TextArea } = Input;

const CreateTestPage = (props) => {
    const { auth } = useContext(AuthContext);
    const { handleCreateTest } = useContext(CourseContext);
    const [optionsModal, setOptionsModal] = useState(false);
    const [editOptionsModal, setEditOptionsModal] = useState(false);
    const [optionsdata, setOptionsData] = useState([]);
    const [selectedRowKey, setSelectedRowKey] = useState();
    const [correctOption, setCorrectOption] = useState();

    const handleLessonSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            values.options = optionsdata;
            values.correctOption = correctOption;
            if (!err && values.options.length > 0 && values.correctOption) {
                const alpha = ('abcdefghijklmnopqrstuvwxyz').split('');
                for (let i = 0; i < values.options.length; i++) {
                    values.options[i].value = alpha[i];
                }
                handleCreateTest(props.match.params.courseId, values);
                props.history.push('/catalogue/' + props.match.params.courseId);
            }
            if (values.options.length <= 0 || !values.correctOption) {
                message.warning('Make sure you set the options and correct option');
            }
        });
    };
    const { getFieldDecorator } = props.form;

    const addOptions = (option) => {
        const format = {
            key: Math.random() * 12,
            text: option.text,
        };
        setOptionsData([...optionsdata, format]);
        setOptionsModal(false);
    }

    const editOptions = (option) => {
        let tempOpt = optionsdata;
        const ind = optionsdata.findIndex((opt) => {
            return opt.key === option.key;
        });
        if (ind !== -1) {
            tempOpt[ind] = option;
            setOptionsData(tempOpt);
        }
        setEditOptionsModal(false);
    }

    const deleteOption = (option) => {
        const newOptionsdata = optionsdata.filter((opt) => {
            return opt.key !== option.key;
        });
        setOptionsData(newOptionsdata);
    }

    if (!auth) {
        return <Redirect to='/dashboard' />
    }

    return (
        <Layout>
            <div style={{ margin: '50px 50px 0', backgroundColor: 'white', padding: '40px 40px' }}>
                <Form onSubmit={handleLessonSubmit} className='login-form'>
                    <Form.Item label='Question:'>
                        {getFieldDecorator('question', {
                            rules: [{ required: true, message: 'Please input test question!' }],
                        })(<TextArea autoSize={{ minRows: 7 }} size='large' />)}
                    </Form.Item>
                    <Form.Item label='Options'>
                        <Button style={{ float: 'right', marginTop: -30, marginBottom: 10 }} type='primary' size='small' icon='plus' onClick={() => setOptionsModal(true)} />
                        <Modal
                            title='Add option'
                            visible={optionsModal}
                            onOk={() => setOptionsModal(false)}
                            onCancel={() => setOptionsModal(false)}
                            footer={null}
                        >
                            <WrappedNormalOptionsForm addOption={addOptions} optLen={optionsdata.length} />
                        </Modal>
                        <Table rowSelection={{

                            columnTitle: 'Correct Option',
                            type: 'radio',
                            selectedRowKey,
                            onChange: (selectedRowKey) => {
                                setSelectedRowKey(selectedRowKey);
                                const tempOpt = optionsdata.find((opt) => {
                                    return opt.key === selectedRowKey[0];
                                });
                                setCorrectOption(tempOpt);
                            }

                        }} tableLayout='fixed' dataSource={optionsdata} columns={[
                            {
                                title: 'Text',
                                dataIndex: 'text',
                                key: 'text',
                            },
                            {
                                title: 'Action',
                                key: 'action',
                                render: (option) => (
                                    <span>
                                        <Tooltip title='Delete this option' key='del-button'>
                                            <Popconfirm
                                                title='Are you sure delete this option?'
                                                onConfirm={() => deleteOption(option)}
                                                onCancel={null}
                                                okText='Yes'
                                                cancelText='No'
                                            >
                                                <Button type='danger' icon='delete' />
                                            </Popconfirm>
                                        </Tooltip>
                                        <Divider type='vertical' />
                                        <Tooltip title='Edit this option' key='edit-button'>
                                            <Button type='primary' icon='edit' onClick={() => setEditOptionsModal(true)} />
                                            <Modal
                                                title='Edit option'
                                                visible={editOptionsModal}
                                                onOk={() => setEditOptionsModal(false)}
                                                onCancel={() => setEditOptionsModal(false)}
                                                footer={null}
                                            >
                                                <WrappedNormalEditOptionsForm editOption={editOptions} option={option} />
                                            </Modal>
                                        </Tooltip>
                                    </span>
                                ),
                            },
                        ]} />
                    </Form.Item>
                    <Form.Item>
                        <Button style={{ float: 'right' }} size='large' type='primary' htmlType='submit' className='login-form-button'>
                            Create Test
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Layout >
    );
}

const WrappedNormalCreateTestForm = Form.create({ name: 'createtest' })(CreateTestPage);

export default WrappedNormalCreateTestForm;