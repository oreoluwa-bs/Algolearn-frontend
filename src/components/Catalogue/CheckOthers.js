import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Layout, Row, Col } from 'antd';
import CourseDetailSmall from './CourseDetailSmall';

const { Title } = Typography;

const CheckOtherCourses = (props) => {
    return (
        <Layout>
            <div style={{ width: '65vw', margin: '100px auto' }}>
                <Title level={4}>Check out some other courses</Title>
                <br></br>
                <Row gutter={{ xs: 10, md: 28, lg: 36, xl: 48 }}>
                    {
                        props.courses && props.courses.length > 0 &&
                        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}>
                            <Link to={`/catalogue/${props.courses[0]._id}`}>
                                <CourseDetailSmall course={props.courses[0]} />
                            </Link>
                        </Col>
                    }
                    {
                        props.courses && props.courses.length > 1 &&
                        <Col xs={{ span: 0 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}>
                            <Link to={`/catalogue/${props.courses[1]._id}`}>
                                <CourseDetailSmall course={props.courses[1]} />
                            </Link>
                        </Col>
                    }
                    {
                        props.courses && props.courses.length > 2 &&
                        <Col xs={{ span: 0 }} lg={{ span: 8 }} xl={{ span: 6 }}>
                            <Link to={`/catalogue/${props.courses[2]._id}`}>
                                <CourseDetailSmall course={props.courses[2]} />
                            </Link>
                        </Col>
                    }
                    {
                        props.courses && props.courses.length > 3 &&
                        <Col xs={{ span: 0 }} xl={{ span: 6 }}>
                            <Link to={`/catalogue/${props.courses[3]._id}`}>
                                <CourseDetailSmall course={props.courses[3]} />
                            </Link>
                        </Col>
                    }
                </Row>
            </div>
        </Layout>
    );
}

export default CheckOtherCourses;