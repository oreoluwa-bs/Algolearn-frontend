import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Drawer, Icon, Menu } from 'antd';

class SignedOutDrawer extends Component {
    render() {
        return (
            <Drawer
                title="Navigation"
                placement="right"
                closable={false}
                onClose={this.props.onClose}
                visible={this.props.visible}
            >
                <div>
                    <Menu theme="light" mode="vertical" style={{ border: 0 }}>
                        <Menu.Item key="coursess">
                            <Icon type="book" />
                            <span>Courses</span>
                        </Menu.Item>
                        <Menu.Divider />
                    </Menu>
                    <div className=''>
                        <Link to='/login'>
                            <Button type="link" block>Login</Button>
                        </Link>

                        <Link to='/signup'>
                            <Button type="primary" block>Sign Up</Button>
                        </Link>
                    </div>
                </div>
            </Drawer>
        );
    }
}

export default SignedOutDrawer;