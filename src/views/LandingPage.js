import React, { Component } from 'react';
// import { Link, Route } from 'react-router-dom';
// import { Layout, Button, Drawer, Icon, Menu, Switch } from 'antd';
import { Layout, Carousel, Button } from 'antd';
import '../styles/landingpage.css';


// const { } = Layout;

class LandingPage extends Component {
    render() {
        return (
            <Layout className="layout" >
                <Carousel autoplay easing='ease-out'>
                    <div className='carousel-content'>
                        <p className='carousel-caption'>Your Course to Success</p>
                        <p className='carousel-text'>Build skills with courses, certificates, and degrees online from world-class universities and companies</p>
                        <Button type='primary'>Join for free</Button>
                    </div>
                    <div className='carousel-content'>
                        <p className='carousel-caption'>Make a global impact</p>
                        <Button type='primary'>Become a tutor</Button>
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