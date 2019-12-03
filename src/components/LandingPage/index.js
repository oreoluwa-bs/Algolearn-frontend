import React, { Component } from 'react';
// import { Link, Route } from 'react-router-dom';
// import { Layout, Button, Drawer, Icon, Menu, Switch } from 'antd';
import { Layout, Carousel, Button } from 'antd';

// const { } = Layout;

class LandingPage extends Component {
    render() {
        return (
            <Layout className="layout" >
                <Carousel autoplay easing='ease-out'>
                    <div className='carousel-content'>
                        <h3>Start your learning today</h3>
                        <Button type='primary'>Join us</Button>
                    </div>
                    <div className='carousel-content'>
                        <h3>Become a tutor with us</h3>
                        <Button type='primary'>Join us</Button>
                    </div>
                </Carousel>
                {/* <div style={{ backgroundColor: 'purple', minHeight: 'calc(400px)' }}>
                    
                </div> */}
                <div style={{ backgroundColor: 'white', minHeight: 'calc(100vh - 533px)' }}>

                </div>
            </Layout>
        );
    }
}

export default LandingPage;