import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Menu, Icon } from 'antd';

class SignedOutLinks extends Component {
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
                        <span>Courses</span>
                        <Link to='/catalogue' />
                    </Menu.Item>
                </Menu>
                <span className="ant-divider" style={{ margin: '0 1em' }} />
                <Link to='/login'>
                    <Button type="link">Login</Button>
                </Link>
                <Link to='/signup' style={{ marginLeft: '5px' }}>
                    <Button type="primary">Sign Up</Button>
                </Link>
            </div>
        );
    }
}

export default SignedOutLinks;