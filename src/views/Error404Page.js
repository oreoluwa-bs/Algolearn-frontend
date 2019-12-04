import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Button, Empty } from 'antd';

const { Header, Content, Footer } = Layout;

const Error404Page = (props) => {
    console.log(props)
    return (
        <Layout className="layout">
            {/* <Header>
                <div className="logo" />
                <div style={{ lineHeight: '64px', float: 'right' }}>
                    <Link to='/other'>
                        <Button type="primary">Login</Button>
                    </Link>
                </div>
            </Header> */}
            <div style={{ minHeight: 'calc(100vh - 133px)', backgroundColor: 'white' }}>
                <Empty
                    image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                    imageStyle={{
                        height: 60,
                    }}
                    description={
                        <span>
                            Sorry page not found
                        </span>
                    }
                >
                    <Button type="primary" onClick={() => {
                        props.history.goBack()
                    }}>Go back</Button>
                </Empty>
            </div>
            <Footer style={{ textAlign: 'center' }}>AlgoLearn ©2019 Created by Oreoluwa Bimbo-Salami</Footer>
        </Layout>
    );
}

export default Error404Page;