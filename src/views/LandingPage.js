import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Carousel, Button, Row, Col, Typography } from 'antd';
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
                <WrappedNormalContactForm />
            </Layout >
        );
    }
}

export default LandingPage;