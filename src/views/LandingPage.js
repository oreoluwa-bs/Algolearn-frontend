import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Carousel, Button, Row, Col, Rate, Typography } from 'antd';
import WrappedNormalContactForm from '../components/Misc/ContactView';
import CourseDetailSmall from '../components/Catalogue/CourseDetailSmall';
import '../styles/landingpage.css';

const { Paragraph, Text, Title } = Typography;

class LandingPage extends Component {

    render() {
        return (
            <Layout className="layout" >
                <Carousel autoplay easing='ease-out'>
                    <div className='carousel-content'>
                        <p className='carousel-caption'>Your Course to Success</p>
                        <p className='carousel-text'>Build skills with courses</p>
                        <Button size='large' type='primary'>Join for free</Button>
                    </div>
                    <div className='carousel-content'>
                        <p className='carousel-caption'>Make a global impact</p>
                        <p className='carousel-text'>Teach skills through courses</p>
                        <Button size='large' type='primary'>Become a tutor</Button>
                    </div>
                </Carousel>
                <Layout>
                    <div style={{ width: '65vw', margin: '100px auto' }}>
                        <Title level={2}>Check out our newest courses</Title>
                        <br></br>
                        <Row gutter={{ xs: 10, md: 28, lg: 36, xl: 48 }}>
                            <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}>
                                <Link to=''>
                                    <CourseDetailSmall />
                                </Link>
                            </Col>
                            <Col xs={{ span: 0 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}>
                                <CourseDetailSmall />
                            </Col>
                            <Col xs={{ span: 0 }} lg={{ span: 8 }} xl={{ span: 6 }}>
                                <CourseDetailSmall />
                            </Col>
                            <Col xs={{ span: 0 }} xl={{ span: 6 }}>
                                <CourseDetailSmall />
                            </Col>
                        </Row>
                    </div>
                </Layout>
                {/* <div style={{ backgroundColor: 'white' }}>
                    <div style={{ width: '65vw', margin: '100px auto' }}>
                        <Row gutter={{ md: 24, lg: 36 }}>
                            <Col xs={{ span: 12 }} lg={{ span: 8 }}>
                                <div className='testimonials' style={{ textAlign: 'center' }}>
                                    <Icon type="smile" theme="twoTone" style={{ fontSize: '100px' }} />
                                    <p className='ds-desc'>Ultimately, Udacity is what really became the driving force behind the career change.</p>
                                    <p className='ds-author' style={{}}>-Mike</p>
                                </div>
                            </Col>
                            <Col xs={{ span: 12 }} lg={{ span: 8 }}>
                                <div className='' style={{ textAlign: 'center' }}>
                                    <Icon type="smile" theme="twoTone" style={{ fontSize: '100px' }} />
                                    <p className='ds-desc'>Before Udacity, I was working two minimum wage jobs. Now, I have a new job, a new mindset, and new life!</p>
                                    <p className='ds-author' style={{}}>-Ryan</p>
                                </div>
                            </Col>
                            <Col xs={{ span: 0 }} lg={{ span: 8 }}>
                                <div className='' style={{ textAlign: 'center' }}>
                                    <Icon type="smile" theme="twoTone" style={{ fontSize: '100px' }} />
                                    <p className='ds-desc'>Before Udacity, I was working two minimum wage jobs. Now, I have a new job, a new mindset, and new life!</p>
                                    <p className='ds-author' style={{}}>-Isaure</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div> */}
                <WrappedNormalContactForm />
            </Layout >
        );
    }
}

export default LandingPage;