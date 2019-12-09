import React, { useState } from 'react';
import { Layout, Steps, Popover, Button, message, Pagination } from 'antd';
import '../../styles/classroom.css'

const { Content } = Layout;
const { Step } = Steps;

const customDot = (dot, { title }) => (
    <Popover
        content={
            <span>
                {title}
            </span>
        }
    >
        {dot}
    </Popover>
);

const steps = [
    {
        title: 'First',
        content: 'First-content',
    },
    {
        title: 'Second',
        content: 'Second-content',
    },
    {
        title: 'Last',
        content: 'Last-content',
    },
];


const Classroom = () => {
    const [current, setCurrent] = useState(0)

    const onChange = current => {
        setCurrent(current)
    };
    return (
        <Layout>
            <Content style={{ padding: '50px 50px' }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 'calc(100vh - 234px', width: '100%' }}>
                    <div style={{}}>
                        <Steps current={current} onChange={onChange} progressDot={customDot}>
                            {steps.map(item => (
                                <Step key={item.title} title={item.title} />
                            ))}
                            {steps.map(item => (
                                <Step key={item.title} title={item.title} />
                            ))}
                            {steps.map(item => (
                                <Step key={item.title} title={item.title} />
                            ))}
                            {steps.map(item => (
                                <Step key={item.title} title={item.title} />
                            ))}
                        </Steps>
                    </div>
                    <div className="steps-content">{steps[current].content}</div>
                    <div className="steps-action">
                        {current < steps.length - 1 && (
                            <Button type="primary" onClick={() => {
                                const nextStep = current + 1;
                                setCurrent(nextStep);
                            }}>
                                Next lesson
                            </Button>
                        )}
                        {current === steps.length - 1 && (
                            <Button type="primary" onClick={() => message.success('Processing complete!')}>
                                Done
                            </Button>
                        )}
                    </div>
                </div>
            </Content>
        </Layout>
    );
}

export default Classroom;