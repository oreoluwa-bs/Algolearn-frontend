import React, { Component } from 'react';
import { Rate, Typography } from 'antd';

const { Paragraph, Text } = Typography;

class CourseViewSmall extends Component {
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
                        <Text type='secondary'>-John Doe</Text>
                    </div>
                    <Rate defaultValue={3} disabled />
                </div>
            </div>
        );
    }
}

export default CourseViewSmall;