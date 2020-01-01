import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Drawer, Icon, Menu } from 'antd';

const SignedOutDrawer = (props) => {
    return (
        <Drawer
            title="Navigation"
            placement="right"
            closable={false}
            onClose={props.onClose}
            visible={props.visible}
        >
            <div>
                <Menu theme="light" mode="vertical" style={{ border: 0 }}>
                    <Menu.Item key="coursess">
                        <Icon type="book" />
                        <span>Catalogue</span>
                    </Menu.Item>
                    <Menu.Divider />
                </Menu>
                <div className=''>
                    <Link to='/login'>
                        <Button type="link" block>Login</Button>
                    </Link>

                    <Link to='/signup/student'>
                        <Button type="primary" block>Become a learner</Button>
                    </Link>
                </div>
            </div>
        </Drawer>
    );
}

export default SignedOutDrawer;