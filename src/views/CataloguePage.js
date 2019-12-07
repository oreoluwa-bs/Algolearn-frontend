import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Input, Row, Col, Skeleton } from 'antd';
import WrappedNormalContactForm from '../components/Misc/ContactView';
import CourseViewSmall from '../components/Catalogue/CourseDetailSmall';
import '../styles/catalogue.css';

const { Search } = Input;

class CataloguePage extends Component {
    render() {
        return (
            <div>
                <Layout className="layout" >
                    <div style={{ marginTop: '50px' }}>
                        <div style={{ width: '80vw', margin: '0 auto' }}>
                            <Search
                                placeholder="Search courses for"
                                onSearch={value => console.log(value)}
                                style={{ height: 50 }}
                            />
                            <br />
                            <br />
                            <br />
                            <br />
                            <Row gutter={{ xs: 10, md: 28, lg: 36, xl: 48 }}>
                                <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 4 }} style={{ marginBottom: 40 }}>
                                    <Link to='/catalogue/1'>
                                        <CourseViewSmall />
                                    </Link>
                                </Col>
                                <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 4 }} style={{ marginBottom: 40 }}>
                                    <Link to=''>
                                        <CourseViewSmall />
                                    </Link>
                                </Col>
                                <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 4 }} style={{ marginBottom: 40 }}>
                                    <Link to=''>
                                        <CourseViewSmall />
                                    </Link>
                                </Col>
                                <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 4 }} style={{ marginBottom: 40 }}>
                                    <Link to=''>
                                        <CourseViewSmall />
                                    </Link>
                                </Col>
                                <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 4 }} style={{ marginBottom: 40 }}>
                                    <Link to=''>
                                        <CourseViewSmall />
                                    </Link>
                                </Col>
                                <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 4 }} style={{ marginBottom: 40 }}>
                                    <Link to=''>
                                        <CourseViewSmall />
                                        {/* <Skeleton
                                        // title={false}
                                        // avatar={{ shape: "square", size: 300, style: { borderRadius: 20 } }}
                                        paragraph={false}
                                        active
                                    />, */}
                                    </Link>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Layout>
                <WrappedNormalContactForm />
            </div>
        );
    }
}

export default CataloguePage;