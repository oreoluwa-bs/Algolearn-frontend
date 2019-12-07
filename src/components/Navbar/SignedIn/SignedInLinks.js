import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Menu, Avatar } from 'antd';

const { SubMenu } = Menu;

class SignedInLinks extends Component {
    state = {}
    render() {
        return (
            <div className='nav-links-right'>
                <Menu
                    mode="horizontal"
                    style={{ lineHeight: '64px', float: 'left' }}
                >
                    <Menu.Item key="catalogue">
                        <Icon type="book" />
                        <span>Catalogue</span>
                        <Link to='/catalogue' />
                    </Menu.Item>
                    <Menu.Item key="classroom">
                        <Icon type="dashboard" />
                        <span>Dashboard</span>
                        <Link to='/dashboard/classroom' />
                    </Menu.Item>
                    <span className="ant-divider" style={{ margin: '0 1em' }} />
                    <SubMenu
                        title={
                            <span className="submenu-title-wrapper">
                                <Avatar size='large' shape='circle' style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>JH</Avatar>
                            </span>
                        }
                    >
                        <Menu.Item key="manageaccount">Manage your account<Link to='/account' /></Menu.Item>
                        <Menu.Item key="logout">
                            <Button block>Logout</Button>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default SignedInLinks;