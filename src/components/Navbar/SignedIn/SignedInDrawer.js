import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, Icon, Menu, Button } from 'antd';

const SignedInDrawer = (props) => {
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
                    <Menu.Item key="catalogue">
                        <Icon type="book" />
                        <span>Catalogue</span>
                        <Link to='/catalogue' />
                    </Menu.Item>
                    <Menu.Item key="classroom">
                        <Icon type="dashboard" />
                        <span>Dashboard</span>
                        <Link to='/dashboard' />
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item key="manageaccount">
                        <Icon type="user" />
                        <span>Manage my account</span>
                    </Menu.Item>
                    <Menu.Item key="logout">
                        <Button block>Logout</Button>
                    </Menu.Item>
                </Menu>
                <div className=''>
                </div>
            </div>
        </Drawer>
    );
}

export default SignedInDrawer;