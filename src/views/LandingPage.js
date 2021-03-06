import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col, Typography, Divider } from 'antd';
import WrappedNormalContactForm from '../components/Misc/ContactView';
import CourseDetailSmall from '../components/Catalogue/CourseDetailSmall';
import '../styles/landingpage.css';
import { CourseContext } from '../store/Contexts/course';
import { AuthContext } from '../store/Contexts/auth';

const { Title, Paragraph } = Typography;

const LandingPage = () => {
    const { handleInit } = useContext(AuthContext);
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

    useEffect(() => {
        handleInit();
    }, [handleInit]);

    return (
        <Layout className="layout" >
            <div className='hero'>
                <div className='hero-bg'> </div>
                <div className='hero-content'>
                    <p className='hero-caption'>Get better grades</p>
                    <p className='hero-text'>Gain the neccessary skills for success</p>
                </div>
            </div>
            <div className='get-started' >
                <div className='get-started-content'>
                    <Title level={1} style={{ fontWeight: 'bold' }}>Begin your journey</Title>
                    <Paragraph>
                        Get a better understanding of your Computer Science courses with AlgoLearn.

                    </Paragraph>
                    <Link to='/signup/tutor' className='ant-btn ant-btn-primary ant-btn-lg' style={{ backgroundColor: '#7D8CC4', borderColor: '#7D8CC4' }}>
                        Become a tutor
                    </Link>
                    <Divider type='vertical' />
                    <Link to='/signup/student' className='ant-btn ant-btn-primary ant-btn-lg'>Become a learner</Link>
                </div>
            </div>
            {
                courses && courses.length > 0 &&
                <Layout>
                    <div style={{ width: '65vw', margin: '100px auto' }}>
                        <Title level={2}>Check out our top rated courses</Title>
                        <br></br>
                        <Row gutter={{ xs: 10, md: 28, lg: 36, xl: 48 }}>
                            {
                                topCourses.length >= 1 &&
                                <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}>
                                    <Link to={`/catalogue/${topCourses[0]._id}`}>
                                        <CourseDetailSmall course={topCourses[0]} />
                                    </Link>
                                </Col>
                            }
                            {
                                topCourses.length >= 2 &&
                                <Col xs={{ span: 0 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}>
                                    <Link to={`/catalogue/${topCourses[1]._id}`}>
                                        <CourseDetailSmall course={topCourses[1]} />
                                    </Link>
                                </Col>
                            }
                            {
                                topCourses.length >= 3 &&
                                <Col xs={{ span: 0 }} lg={{ span: 8 }} xl={{ span: 6 }}>
                                    <Link to={`/catalogue/${topCourses[2]._id}`}>
                                        <CourseDetailSmall course={topCourses[2]} />
                                    </Link>
                                </Col>
                            }
                            {
                                topCourses.length >= 4 &&
                                <Col xs={{ span: 0 }} xl={{ span: 6 }}>
                                    <Link to={`/catalogue/${topCourses[3]._id}`}>
                                        <CourseDetailSmall course={topCourses[3]} />
                                    </Link>
                                </Col>
                            }
                        </Row>
                    </div>
                </Layout>
            }
            <WrappedNormalContactForm />
        </Layout >
    );
}

export default LandingPage;