import React from 'react';
import { Rate, Typography, Avatar } from 'antd';

const { Paragraph, Text } = Typography;

const CourseDetailSmall = (props) => {
    let rating = 0;
    props.course.ratings.forEach(rate => {
        rating += rate;
    });
    return (
        <div className='course-card'>
            <div className='course-card-top'></div>
            <div className='course-card-body'>
                <h1>{props.course.title}</h1>
                <Paragraph ellipsis={{ rows: 3 }}>{props.course.description}</Paragraph>
                <div>
                    <div>
                        <Avatar size='small' style={{ color: '#c56a00', backgroundColor: '#cde3cf', marginRight: 10 }}>{props.course.authorName.split(' ')[0][0]}{props.course.authorName.split(' ')[1][0]}</Avatar>
                        <Text type='secondary'>{props.course.authorName}</Text>
                    </div>
                </div>
                <Rate defaultValue={Math.round(rating / props.course.ratings.length)} disabled />
            </div>
        </div>
    );
}

export default CourseDetailSmall;