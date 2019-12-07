import React, { Component } from 'react';
import { Rate, Typography, Avatar } from 'antd';

const { Paragraph, Text } = Typography;

class CourseDetailSmall extends Component {
    state = {}
    render() {
        return (
            <div className='course-card'>
                <div className='course-card-top'></div>
                <div className='course-card-body'>
                    <h1>Course 2</h1>
                    <Paragraph ellipsis={{ rows: 3 }}>
                        Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                        Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
                        a design language for background applications, is refined by Ant UED Team. Ant Design, a
                        design language for background applications, is refined by Ant UED Team. Ant Design, a design
                        language for background applications, is refined by Ant UED Team. Ant Design, a design
                        language for background applications, is refined by Ant UED Team.
                                        </Paragraph>
                    <div>
                        <div>
                            <Avatar size='small' style={{ color: '#c56a00', backgroundColor: '#cde3cf', marginRight: 10 }}>JD</Avatar>
                            <Text type='secondary'>John Doe</Text>
                        </div>
                    </div>
                    <Rate defaultValue={3} disabled />
                </div>
            </div>
        );
    }
}

export default CourseDetailSmall;