import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Input, Row, Col, Empty } from 'antd';
import WrappedNormalContactForm from '../components/Misc/ContactView';
import CourseDetailSmall from '../components/Catalogue/CourseDetailSmall';
import { CourseContext } from '../store/Contexts/course';
import '../styles/catalogue.css';

const { Search } = Input;

const CataloguePage = () => {
    const { courses, getCourses } = useContext(CourseContext);
    const [catCourses, setCatCourses] = useState([]);

    useEffect(() => {
        getCourses();
    }, [getCourses])

    useEffect(() => {
        setCatCourses(courses);
    }, [courses])

    const handleSearch = (e) => {
        setCatCourses(courses.filter((course) => {
            const title_course = course.title.toLowerCase();
            const search_params = e.target.value.toLowerCase();
            return title_course.includes(search_params);
        }))
    };

    return (
        <div>
            <Layout className="layout" >
                <div style={{ marginTop: '50px' }}>
                    <div style={{ width: '75vw', margin: '0 auto' }}>
                        <Search
                            placeholder="Search courses for"
                            onSearch={handleSearch}
                            onInput={handleSearch}
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
                                            <Col key={course._id} xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 6 }} style={{ marginBottom: 40 }}>
                                                <Link to={`/catalogue/${course._id}`}>
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