import React, { useContext, useEffect, useState } from 'react';
import { Layout, Radio, Typography, Empty, Form, Button, Modal, Progress } from 'antd';
import { CourseContext } from '../../store/Contexts/course';
import { AuthContext } from '../../store/Contexts/auth';
import { Redirect } from 'react-router-dom';

const { Content } = Layout;
const { Text, Title } = Typography;

const TestPage = (props) => {
    const { courses } = useContext(CourseContext);
    const { handleCompleteCourse, auth } = useContext(AuthContext);
    const [course, setCurrCourse] = useState();
    const [modalVisible, setModal] = useState(false);
    const [modalFinVisible, setFinModal] = useState(false);
    const [tests, setTest] = useState([]);
    const [finScore, setFinScore] = useState(0);

    useEffect(() => {
        if (courses) {
            const tempCourse = courses.find((course) => {
                return course._id === props.match.params.courseId
            });
            setCurrCourse(tempCourse);
            if (tempCourse) {
                setTest(tempCourse.test)
            }
        }
    }, [courses, props.match.params.courseId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setModal(false);
        props.form.validateFields((err, values) => {
            let score = 0;
            const tempVal = values;
            const tempArr = Object.values(tempVal);
            values = {};
            for (let i = 0; i < tempArr.length; i++) {
                if (tempArr[i] === tests[i].answer.value) {
                    score += 1;
                }
            }
            const percentAgeScore = (score / tempArr.length) * 100;
            values = {
                userAnswer: tempArr,
                testValues: tests,
                finalScore: score,
            }
            if (!err) {
                setFinScore({
                    percentAgeScore,
                    score,
                    questionCount: tempArr.length
                });
                setFinModal(true);
                if (percentAgeScore >= 60) {
                    handleCompleteCourse(course._id);
                    props.history.push(`/dashboard`);
                }
            }
        });
    };

    const { getFieldDecorator } = props.form;

    if (!auth) {
        return <Redirect to='/' />
    }
    return (
        <Layout>
            <Content style={{ padding: '50px 50px 0' }}>
                <div style={{ background: '#fff', padding: '50px', minHeight: 280 }}>
                    <Title level={3}>Test</Title>
                    {
                        tests && tests.length > 0 &&
                        <div>
                            <Form onSubmit={handleSubmit}>
                                {
                                    tests.map((question, index) => {
                                        return (
                                            <div key={question._id} style={{ marginBottom: 20 }}>
                                                <Text>{index + 1}.  {question.question}</Text>
                                                <br />
                                                <Form.Item>
                                                    {getFieldDecorator(question._id)(
                                                        <Radio.Group name='radiogroup'>
                                                            {
                                                                question.answers.map((options) => {
                                                                    return (
                                                                        <Radio key={options.value} value={options.value}>{options.text}</Radio>
                                                                    )
                                                                })
                                                            }
                                                        </Radio.Group>
                                                    )}
                                                </Form.Item>
                                            </div>
                                        );
                                    })
                                }
                                <Modal
                                    // width={300}
                                    title='Final Score'
                                    visible={modalFinVisible}
                                    onOk={() => { setFinModal(false) }}
                                    onCancel={() => setFinModal(false)}
                                >
                                    {
                                        finScore.percentAgeScore === 100 &&
                                        <div style={{ textAlign: 'center' }}>
                                            <Progress type="circle" percent={finScore.percentAgeScore} format={percent => percent + '%'} />
                                            <Title level={4} style={{ marginTop: 10 }}>
                                                You scored {finScore.score}/{finScore.questionCount}. Excellent!
                                            </Title>
                                        </div>
                                    }
                                    {
                                        finScore.percentAgeScore >= 60 && finScore.percentAgeScore <= 99 &&
                                        <div style={{ textAlign: 'center' }}>
                                            <Progress type="circle" percent={finScore.percentAgeScore} />
                                            <Title level={4} style={{ marginTop: 10 }}>
                                                You scored {finScore.score}/{finScore.questionCount}. Very Good!
                                            </Title>
                                        </div>
                                    }
                                    {
                                        finScore.percentAgeScore < 60 &&
                                        <div style={{ textAlign: 'center' }}>
                                            <Progress strokeColor='red' type="circle" percent={finScore.percentAgeScore} />
                                            <Title level={4} style={{ marginTop: 10 }}>
                                                You scored {finScore.score}/{finScore.questionCount}. You could do better!
                                            </Title>
                                        </div>
                                    }
                                </Modal>
                            </Form>
                            <Form.Item >
                                <div className='steps-action' style={{ float: 'right' }}>
                                    {
                                        <div>
                                            <Button type='primary' onClick={() => setModal(true)}>
                                                Submit test
                                            </Button>
                                            <Modal
                                                width={300}
                                                title='Submit Test'
                                                visible={modalVisible}
                                                onOk={handleSubmit}
                                                onCancel={() => setModal(false)}
                                                footer={[
                                                    <Button key='cancel' onClick={() => setModal(false)}>
                                                        Cancel
                                                    </Button>,
                                                    <Button key='submit' type='primary' onClick={handleSubmit}>
                                                        Submit
                                                    </Button>,
                                                ]}
                                            >
                                                Are you sure you want to submit your answers?
                                            </Modal>
                                        </div>
                                    }
                                </div>
                            </Form.Item>
                        </div>
                    }
                    {
                        // eslint-disable-next-line no-mixed-operators
                        tests && tests.length <= 0 &&
                        <Empty
                            imageStyle={{
                                height: 200,
                            }}
                            description={
                                <span>
                                    There are no questions available at the momment. Try again later
                            </span>
                            }
                        >
                        </Empty>
                    }
                    {
                        // eslint-disable-next-line no-mixed-operators
                        !tests &&
                        <Empty
                            imageStyle={{
                                height: 200,
                            }}
                            description={
                                <span>
                                    There are no questions available at the momment. Try again later
                            </span>
                            }
                        >
                        </Empty>
                    }
                </div>
            </Content>
        </Layout >
    );
}

const WrappedTest = Form.create({ name: 'testpage' })(TestPage);

export default WrappedTest;