import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Input, Row, Col } from 'antd';
import CourseViewSmall from './CourseViewSmall';

const { Search } = Input;

class Catalogue extends Component {
    render() {
        return (
            <Layout className="layout" >
                <div style={{ marginTop: '50px' }}>
                    <div style={{ width: '50vw', margin: '0 auto' }}>
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
                            <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }} style={{ marginBottom: 40 }}>
                                <Link to=''>
                                    <CourseViewSmall />
                                </Link>
                            </Col>
                            <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }} style={{ marginBottom: 40 }}>
                                <Link to=''>
                                    <CourseViewSmall />
                                </Link>
                            </Col>
                            <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }} style={{ marginBottom: 40 }}>
                                <Link to=''>
                                    <CourseViewSmall />
                                </Link>
                            </Col>
                            <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }} style={{ marginBottom: 40 }}>
                                <Link to=''>
                                    <CourseViewSmall />
                                </Link>
                            </Col>
                            <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }} style={{ marginBottom: 40 }}>
                                <Link to=''>
                                    <CourseViewSmall />
                                </Link>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Catalogue;