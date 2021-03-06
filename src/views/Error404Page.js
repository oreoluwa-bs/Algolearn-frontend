import React from 'react';
import { Layout, Button, Empty } from 'antd';
import WrappedNormalContactForm from '../components/Misc/ContactView';
import emptyImage from '../assets/images/undraw_404.svg';


const Error404Page = (props) => {
    return (
        <div>
            <Layout className="layout">
                <div style={{ minHeight: '50vh', marginTop: '25vh' }}>
                    <Empty
                        image={emptyImage}
                        imageStyle={{
                            margin: '0 0px 50px'
                        }}
                        description={
                            <span className='error404-text'>
                                Page not found
                        </span>
                        }
                    >
                        <Button style={{ margin: '30px 0px 0px' }} type="primary" onClick={() => {
                            props.history.goBack()
                        }}>Go back</Button>
                    </Empty>
                </div>
            </Layout>
            <WrappedNormalContactForm />
        </div>
    );
}

export default Error404Page;