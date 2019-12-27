import React from 'react';
import { Rate, Typography, Avatar } from 'antd';

const { Paragraph, Text } = Typography;

const CourseDetailSmall = (props) => {
    const rating = props.course.ratings.reduce((acc, currentOrder) => acc + currentOrder);

    const colors_bg = ['#78C3FB', '#C28CAE', '#49475B', '#799496', '#4F646F', '#F87060', '#102542'];

    const colors_random = () =>  Math.floor(Math.random() * colors_bg.length);
    
    return (
        <div className='course-card'>
            <div className='course-card-top' style={{ backgroundColor: colors_bg[colors_random()] }}></div>
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