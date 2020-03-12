import React, { useContext, useState, useEffect } from 'react';
import { List, Comment, Avatar, Empty, Icon } from 'antd';
import ScrollToBottom from 'react-scroll-to-bottom';
import moment from 'moment';
import { ColorContext } from '../../store/Contexts/colors';

const CommentList = ({ comments, userId }) => {
    const { colors_bg, colors_random } = useContext(ColorContext);
    const [pageColor, setPageColor] = useState('black');

    useEffect(() => {
        setPageColor(colors_bg[colors_random()]);
    }, [userId, colors_random, colors_bg]);

    return (
        <div>
            {
                comments.length > 0 &&
                <ScrollToBottom>
                    <List
                        dataSource={comments}
                        // header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
                        itemLayout="horizontal"
                        renderItem={props => {
                            const avatartName = `${props.user.split(' ')[0] ? props.user.split(' ')[0][0] : ''}${props.user.split(' ')[1] ? props.user.split(' ')[1][0] : ''}`

                            return <Comment
                                datetime={moment().fromNow()}
                                author={props.user}
                                avatar={<Avatar size='large' shape='circle' style={{ color: 'white', backgroundColor: pageColor }}>{avatartName}</Avatar>}
                                content={<p>{props.text}</p>}
                            />
                        }}
                    />
                </ScrollToBottom>
            }
            {
                comments.length <= 0 &&
                <div style={{ marginTop: '5vh', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }} >
                    <Empty
                        image={<Icon type="message" theme="twoTone" style={{ fontSize: 100 }} />}
                        imageStyle={{
                            margin: '0 0px 50px'
                        }}
                        description={
                            <span className='' style={{ fontSize: 20 }}>Have a comment?</span>
                        }
                    />
                </div>
            }
        </div >
    );
}

export default CommentList;