import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, Icon, Menu, Button } from 'antd';

class SignedInDrawer extends Component {
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
                        <Menu.Item key="catalogue">
                            <Icon type="book" />
                            <span>Courses</span>
                        </Menu.Item>
                        <Menu.Item key="classroom">
                            <Icon type="dashboard" />
                            <span>Classroom</span>
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
}

export default SignedInDrawer;