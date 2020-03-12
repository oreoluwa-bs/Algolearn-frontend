import React, { useContext } from 'react';
import { Comment, Avatar, Form, Button, Input } from 'antd';
import { AuthContext } from '../../store/Contexts/auth';

const { TextArea } = Input;

const Editor = ({ onChange, onSubmit, value, placeholder }) => (
    <div>
        <Form.Item>
            <TextArea placeholder={placeholder} rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" onClick={onSubmit} type="primary">
                Add Comment
        </Button>
        </Form.Item>
    </div>
);

const InputComment = ({ comment, setComment, sendComment }) => {
    const { auth } = useContext(AuthContext);
    return (
        <div style={{ borderTop: '1px solid #D9D9D9' }}>
            <div style={{ padding: 30, paddingBottom: 0 }}>
                <Comment
                    avatar={
                        <Avatar size='large' shape='circle' style={{ color: 'white', backgroundColor: localStorage.getItem('avatarColor') }}>{auth.firstname[0]}{auth.lastname[0]}</Avatar>
                    }
                    content={
                        <Editor
                            onChange={(event) => setComment(event.target.value)}
                            onSubmit={(event) => sendComment(event)}
                            placeholder='Comment...'
                            // submitting={submitting}
                            value={comment}
                        />
                    }
                />
            </div>
        </div>
    );
}

export default InputComment;