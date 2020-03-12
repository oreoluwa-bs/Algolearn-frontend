import React, { useState, useEffect, useContext } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import { Layout } from 'antd';

import InputComment from '../components/DiscussionBoard/InputComment';
import InfoBar from '../components/DiscussionBoard/InfoBar';
import CommentList from '../components/DiscussionBoard/CommentList';
import { CourseContext } from '../store/Contexts/course';

const { Content } = Layout;

let socket;

const DisscussionBoard = (props) => {
    const [userId, setUserId] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const { courses } = useContext(CourseContext);
    const [roomName, setRoomName] = useState('');


    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        if (room) {
            const couse = courses.find((course) => {
                const id = course._id;
                return id === room;
            });
            if (couse) {
                setRoomName(couse.title);
            }
        }
    }, [courses, room]);

    useEffect(() => {
        const { userId, room } = queryString.parse(props.location.search);

        socket = io(ENDPOINT);

        setRoom(room);
        setUserId(userId)

        socket.emit('join', { userId, room }, (error) => {
            if (error) {
                alert(error);
            }
        });
    }, [ENDPOINT, props.location.search]);



    useEffect(() => {
        socket.on('comment', (message) => {
            setComments([...comments, message]);
        });

        socket.on('roomData', ({ users }) => {
            setUsers(users);
        })

        return () => {
            socket.emit('disconnect');

            socket.off();
        }
    }, [comments]);

    const sendComment = (event) => {
        event.preventDefault();

        if (comment) {
            socket.emit('sendComment', comment, () => setComment(''));
        }
    }

    return (
        <Layout className='discussion-board'>
            {/*<TextContainer users={users} /> */}
            <Content style={{ padding: '0 50px', marginTop: 50 }}>
                <div style={{ background: '#fff', minHeight: 280 }}>
                    <InfoBar room={roomName} />
                    <div style={{ padding: 30, paddingBottom: 0 }}>
                        <div className='discussion-container'>
                            <CommentList comments={comments} userId={userId} />
                        </div>
                    </div>
                    <InputComment comment={comment} setComment={setComment} sendComment={sendComment} />
                </div>
            </Content>

        </Layout>
    );
}

export default DisscussionBoard;