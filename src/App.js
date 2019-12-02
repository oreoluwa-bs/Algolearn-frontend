import React from 'react';
import { Layout, Menu, Button } from 'antd';
import './App.css';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="">
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px', float: 'right' }}
          >
            <Button type="primary">Login</Button>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>AlgoLearn ©2019 Created by Oreoluwa Bimbo-Salami</Footer>
      </Layout>
    </div>
  );
}

export default App;
