import React, { useState, useEffect, useContext } from 'react';
import { Layout, Form, Input, Button, Table, Tooltip, Divider, Modal, message, Popconfirm } from 'antd';
import WrappedNormalOptionsForm from '../Misc/OptionsForm';
import WrappedNormalEditOptionsForm from '../Misc/EditOptionsForm';
import { CourseContext } from '../../store/Contexts/course';

const { TextArea } = Input;

const EditTestPage = (props) => {
    const { handleEditTest } = useContext(CourseContext);
    const [optionsModal, setOptionsModal] = useState(false);
    const [editOptionsModal, setEditOptionsModal] = useState(false);
    const [optionsdata, setOptionsData] = useState([]);
    const [selectedRowKey, setSelectedRowKey] = useState();
    const [correctOption, setCorrectOption] = useState();

    const [editOpt, setEditOpt] = useState();

    useEffect(() => {
        if (props.test) {
            setOptionsData(props.test.answers);
            // setSelectedRowKey([props.test.answer._id]);
            // setCorrectOption(props.test.answer);
        }
    }, [props.test])

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
                handleEditTest(props.course._id, props.test._id, values);
                props.history.push('/catalogue/' + props.course._id);
                // console.log(props);
            }
            if (values.options.length <= 0 || !values.correctOption) {
                message.warning('Make sure you set the options and correct option');
            }
        });
    };
    const { getFieldDecorator } = props.form;

    const addOptions = (option) => {
        const format = {
            _id: Math.random() * 12,
            text: option.text,
        };
        setOptionsData([...optionsdata, format]);
        setOptionsModal(false);
    }

    const editOptions = (option) => {
        let tempOpt = optionsdata;
        const ind = optionsdata.findIndex((opt) => {
            return opt._id === option._id;
        });
        if (ind !== -1) {
            tempOpt[ind] = option;
            setOptionsData(tempOpt);
        }
        setEditOptionsModal(false);
    }

    const deleteOption = (option) => {
        const newOptionsdata = optionsdata.filter((opt) => {
            return opt._id !== option._id;
        });
        setOptionsData(newOptionsdata);
    }

    return (
        <Layout>
            <div style={{ margin: '50px 50px 0', backgroundColor: 'white', padding: '40px 40px' }}>
                <Form onSubmit={handleLessonSubmit} className='login-form'>
                    <Form.Item label='Question:'>
                        {getFieldDecorator('question', {
                            initialValue: props.test ? props.test.question : '',
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
                        <Table tableLayout='fixed'
                            rowKey={(e) => e._id || (Math.random() * 12).toString()}
                            rowSelection={{
                                columnTitle: 'Correct Option',
                                type: 'radio',
                                selectedRowKeys: correctOption ? [correctOption._id] : selectedRowKey,
                                onChange: (selectedRowKey) => {
                                    setSelectedRowKey(selectedRowKey);
                                    const tempOpt = optionsdata.find((opt) => {
                                        return opt._id === selectedRowKey[0];
                                    });
                                    setCorrectOption(tempOpt);
                                }

                            }} dataSource={optionsdata} columns={[
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
                                                <Button type='primary' icon='edit' onClick={() => {
                                                    setEditOpt(option);
                                                    setEditOptionsModal(true);
                                                }} />
                                                <Modal
                                                    title='Edit option'
                                                    visible={editOptionsModal}
                                                    onOk={() => setEditOptionsModal(false)}
                                                    onCancel={() => setEditOptionsModal(false)}
                                                    footer={null}
                                                >
                                                    <WrappedNormalEditOptionsForm editOption={editOptions} option={editOpt} />
                                                </Modal>
                                            </Tooltip>
                                        </span>
                                    ),
                                },
                            ]} />
                    </Form.Item>
                    <Form.Item>
                        <Button style={{ float: 'right' }} size='large' type='primary' htmlType='submit' className='login-form-button'>
                            Save
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Layout >
    );
}

const WrappedNormalEditTestForm = Form.create({ name: 'edittest' })(EditTestPage);

export default WrappedNormalEditTestForm;