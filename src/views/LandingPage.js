import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Button, Row, Col, Typography, Divider } from 'antd';
import WrappedNormalContactForm from '../components/Misc/ContactView';
import CourseDetailSmall from '../components/Catalogue/CourseDetailSmall';
import '../styles/landingpage.css';
import { CourseContext } from '../store/Contexts/course';

const { Title } = Typography;

const LandingPage = () => {
    const { courses } = useContext(CourseContext);
    const topCourses = courses.sort((a, b) => {
        let arating = 0;
        let brating = 0;

        a.ratings.forEach(rate => {
            arating += rate;
        });

        b.ratings.forEach(rate => {
            brating += rate;
        });

        if (Math.round(arating / a.ratings.length) < Math.round(brating / b.ratings.length)) {
            return 1;
        }
        if (Math.round(arating / a.ratings.length) > Math.round(brating / b.ratings.length)) {
            return -1;
        }
        // names must be equal
        return 0;
    });

    return (
        <Layout className="layout" >
            {/* <Carousel autoplay easing='ease-out'>
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
            </Carousel> */}
            <div className='hero'>
                <div className='carousel-content'>
                    <p className='carousel-caption'>Your Course to Success</p>
                    <p className='carousel-text'>Build skills with courses</p>
                    <Button size='large' type='default'>Become a tutor</Button>
                    <Divider type='vertical'/>
                    <Button size='large' type='primary'>Become a learner</Button>
                </div>
            </div>
            <Layout>
                <div style={{ width: '65vw', margin: '100px auto' }}>
                    <Title level={2}>Check out our newest courses</Title>
                    <br></br>
                    <Row gutter={{ xs: 10, md: 28, lg: 36, xl: 48 }}>
                        {
                            topCourses.length >= 1 &&
                            <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}>
                                <Link to=''>
                                    <CourseDetailSmall course={topCourses[0]} />
                                </Link>
                            </Col>
                        }
                        {
                            topCourses.length >= 2 &&
                            <Col xs={{ span: 0 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}>
                                <CourseDetailSmall course={topCourses[1]} />
                            </Col>
                        }
                        {
                            topCourses.length >= 3 &&
                            <Col xs={{ span: 0 }} lg={{ span: 8 }} xl={{ span: 6 }}>
                                <CourseDetailSmall course={topCourses[2]} />
                            </Col>
                        }
                        {
                            topCourses.length >= 4 &&
                            <Col xs={{ span: 0 }} xl={{ span: 6 }}>
                                <CourseDetailSmall course={topCourses[3]} />
                            </Col>
                        }
                    </Row>
                </div>
            </Layout>
            <WrappedNormalContactForm />
        </Layout >
    );
}

export default LandingPage;