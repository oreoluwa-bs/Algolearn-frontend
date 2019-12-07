import React, { useState } from 'react';
import { Layout, Menu, Icon, Steps, Popover } from 'antd';
import '../styles/dashboard.css';

const { Content, Sider } = Layout;
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

const Dashboard = () => {
    const [isCollapsed, setCollapsed] = useState(false)
    const [current, setCurrent] = useState(0)

    const onCollapse = collapsed => {
        setCollapsed(!isCollapsed);
    };
    const onChange = current => {
        setCurrent(current)
    };
    return (
        <Layout style={{ minHeight: 'calc(100vh - 64px)' }} hasSider>
            <Sider
                breakpoint="md"
                className='dashboard-sider'
                collapsible collapsed={isCollapsed} onCollapse={onCollapse}
                theme='dark'
            >
                <Menu theme='dark' mode="inline" style={{ height: '100%', borderRight: 0 }}>
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span>Option 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span>Option 2</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout style={{ margin: '50px 0 0' }}>
                <Content style={{ margin: '0 30px' }}>
                    <div style={{ padding: 24, background: '#fff', minHeight: 'calc(100vh - 164px)' }}>
                        <Steps current={current} onChange={onChange} progressDot={customDot} labelPlacement='horizontal'>
                            <Step title='hey' />
                            <Step title='hey' />
                            <Step title='hey' />
                            <Step title='hey' />
                            <Step title='hey' />
                            <Step title='hey' />
                            <Step title='hey' />
                            <Step title='hey' />
                            <Step title='hey' />
                            <Step title='hey' />
                            <Step title='hey' />
                        </Steps>
                        Bill is a cat.
                        </div>
                </Content>
            </Layout>
        </Layout>
    );
}

export default Dashboard;