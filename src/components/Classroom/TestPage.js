import React, { useContext } from 'react';
import { Layout, Radio, Typography, Empty } from 'antd';
import { CourseContext } from '../../store/Contexts/course';

const { Content } = Layout;
const { Text, Title } = Typography;

const TestPage = (props) => {
    const { courses } = useContext(CourseContext);

    const course = courses.find((course) => {
        return course.id === props.match.params.courseId
    });

    const tests = course.tests
    console.log(tests)

    return (
        <Layout>
            <Content style={{ padding: '50px 50px 0' }}>
                <div style={{ background: '#fff', padding: '50px', minHeight: 280 }}>
                    <Title level={3}>Test</Title>
                    {
                        tests && tests.length > 0 &&
                        tests.map((question, index) => {
                            return (
                                <div key={question.id} style={{ marginBottom: 20 }}>
                                    <Text>{index + 1}.  {question.question}</Text>
                                    <br />
                                    <Radio.Group name='radiogroup'>
                                        {
                                            question.answers.map((options) => {
                                                return (
                                                    <Radio key={options.value} value={options.value}>{options.text}</Radio>
                                                )
                                            })
                                        }
                                    </Radio.Group>
                                </div>
                            );
                        })
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
        </Layout>
    );
}

export default TestPage;