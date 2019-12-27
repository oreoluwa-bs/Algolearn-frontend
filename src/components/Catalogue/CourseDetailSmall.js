import React, { useContext } from 'react';
import { Rate, Typography, Avatar } from 'antd';
import { ColorContext } from '../../store/Contexts/colors';

const { Paragraph, Text } = Typography;

const CourseDetailSmall = (props) => {
    const { colors_bg, colors_random } = useContext(ColorContext);
    const rating = props.course.ratings.reduce((acc, currentOrder) => acc + currentOrder);
    
    return (
        <div className='course-card'>
            <div className='course-card-top' style={{ backgroundColor: colors_bg[colors_random()] }}></div>
            <div className='course-card-body'>
                <h1>{props.course.title}</h1>
                <Paragraph ellipsis={{ rows: 3 }}>{props.course.description}</Paragraph>
                <div>
                    <div>
                        <Avatar size='small' style={{ color: 'white', backgroundColor: colors_bg[colors_random()], marginRight: 10 }}>{props.course.authorName.split(' ')[0][0]}{props.course.authorName.split(' ')[1][0]}</Avatar>
                        <Text type='secondary'>{props.course.authorName}</Text>
                    </div>
                </div>
                <Rate defaultValue={Math.round(rating / props.course.ratings.length)} disabled />
            </div>
        </div>
    );
}

export default CourseDetailSmall;