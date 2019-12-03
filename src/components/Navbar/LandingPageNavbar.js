import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Button, Drawer, Icon, Menu } from 'antd';

const { Header } = Layout;

class LandingPageNavbar extends Component {
    state = {
        visible: false,
    };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };
    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    render() {
        return (
            <Header>
                <div className="logo" />

                <div style={{ float: 'right' }}>
                    <Button className="barsMenu" type="default" onClick={this.showDrawer}>
                        <Icon type="bars" />
                    </Button>
                </div>

                <div className='nav-links-right'>
                    <Menu
                        mode="horizontal"
                        style={{ lineHeight: '64px', float: 'left' }}
                    >
                        <Menu.Item key="catalogue">
                            Courses
                                <Link to='/catalogue' />
                        </Menu.Item>
                    </Menu>
                    <span className="ant-divider" style={{ margin: '0 1em' }} />
                    <Link to='/other'>
                        <Button type="link">Login</Button>
                    </Link>
                    <Link to='/other' style={{ marginLeft: '5px' }}>
                        <Button type="primary">Sign Up</Button>
                    </Link>
                </div>


                <Drawer
                    title="Navigation"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
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
                            <Link to='/other'>
                                <Button type="link" block>Login</Button>
                            </Link>

                            <Link to='/other'>
                                <Button type="primary" block>Sign Up</Button>
                            </Link>
                        </div>
                    </div>
                </Drawer>
            </Header>
        );
    }
}

export default LandingPageNavbar;