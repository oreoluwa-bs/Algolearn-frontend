import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Button, Empty } from 'antd';
import emptyImage from '../assets/images/undraw_404.svg';


const Error404Page = (props) => {
    console.log(props)
    return (
        <Layout className="layout">
            <div style={{ minHeight: 'calc(100vh - 233px)', marginTop: '100px' }}>
                <Empty
                    image={emptyImage}
                    imageStyle={{
                        height: 400,
                    }}
                    description={
                        <p className='error404-text'>
                            Page not found
                        </p>
                    }
                >
                    <Button type="primary" onClick={() => {
                        props.history.goBack()
                    }}>Go back</Button>
                </Empty>
            </div>
        </Layout>
    );
}

export default Error404Page;