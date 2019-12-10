import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Input, Row, Col, Empty } from 'antd';
import WrappedNormalContactForm from '../components/Misc/ContactView';
import CourseDetailSmall from '../components/Catalogue/CourseDetailSmall';
import '../styles/catalogue.css';
import { CourseContext } from '../store/Contexts/course';

const { Search } = Input;

const CataloguePage = () => {
    const { courses } = useContext(CourseContext);
    const [catCourses, setCatCourses] = useState(courses);
    return (
        <div>
            <Layout className="layout" >
                <div style={{ marginTop: '50px' }}>
                    <div style={{ width: '80vw', margin: '0 auto' }}>
                        <Search
                            placeholder="Search courses for"
                            onSearch={value => {
                                setCatCourses(courses.filter((course) => {
                                    return course.title.includes(value)
                                }))
                            }}

                            style={{ height: 50 }}
                        />
                        <br />
                        <br />
                        <br />
                        <br />
                        {
                            catCourses &&
                            <Row gutter={{ xs: 10, md: 28, lg: 36, xl: 48 }} style={{ marginBottom: 40 }}>
                                {
                                    catCourses.map((course) => {
                                        return (
                                            <Col key={course.id} xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 4 }} style={{ marginBottom: 40 }}>
                                                <Link to={`/catalogue/${course.id}`}>
                                                    <CourseDetailSmall course={course} />
                                                </Link>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        }
                        {
                            catCourses && catCourses.length <= 0 &&
                            <Empty
                                style={{ marginBottom: 80 }}
                                imageStyle={{
                                    height: 200,
                                }}
                                description={
                                    <span>
                                        Sorry no courses found!
                                    </span>
                                }
                            >
                            </Empty>
                        }
                    </div>
                </div>
            </Layout>
            <WrappedNormalContactForm />
        </div>
    );
}

export default CataloguePage;