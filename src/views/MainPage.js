import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Button } from 'antd';

const { Header, Content, Footer } = Layout;

const MainPage = () => {
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <div style={{ lineHeight: '64px', float: 'right' }}>
                    <Link to='/other'>
                        <Button type="primary">Login</Button>
                    </Link>
                </div>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 'calc(100vh - 133px)' }}>Content</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>AlgoLearn ©2019 Created by Oreoluwa Bimbo-Salami</Footer>
        </Layout>
    );
}

export default MainPage;