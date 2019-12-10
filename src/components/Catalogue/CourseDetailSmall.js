import React from 'react';
import { Rate, Typography, Avatar } from 'antd';

const { Paragraph, Text } = Typography;

const CourseDetailSmall = (props) => {
    let rating = 0;
    props.course.ratings.forEach(rate => {
        rating += rate;
    });
    // console.log(rating/props.course.ratings.length);
    return (
        <div className='course-card'>
            <div className='course-card-top'></div>
            <div className='course-card-body'>
                <h1>{props.course.title}</h1>
                <Paragraph ellipsis={{ rows: 3 }}>{props.course.description}</Paragraph>
                <div>
                    <div>
                        <Avatar size='small' style={{ color: '#c56a00', backgroundColor: '#cde3cf', marginRight: 10 }}>JD</Avatar>
                        <Text type='secondary'>John Doe</Text>
                    </div>
                </div>
                <Rate defaultValue={Math.round(rating/props.course.ratings.length)} disabled />
            </div>
        </div>
    );
}

export default CourseDetailSmall;