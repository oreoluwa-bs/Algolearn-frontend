import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Menu, Avatar } from 'antd';
import { AuthContext } from '../../../store/Contexts/auth';

const { SubMenu } = Menu;

const SignedInLinks = () => {
    const { auth, handleLogout } = useContext(AuthContext);

    const colors_bg = ['#78C3FB', '#C28CAE', '#49475B', '#799496', '#4F646F', '#F87060', '#102542'];

    const colors_random = () => Math.floor(Math.random() * colors_bg.length);

    return (
        <div className='nav-links-right'>
            <Menu
                mode='horizontal'
                style={{ lineHeight: '64px', float: 'left' }}
            >
                <Menu.Item key='catalogue'>
                    <Icon type='book' />
                    <span>Catalogue</span>
                    <Link to='/catalogue' />
                </Menu.Item>
                <Menu.Item key='classroom'>
                    <Icon type='dashboard' />
                    <span>Dashboard</span>
                    <Link to='/dashboard' />
                </Menu.Item>
                <span className='ant-divider' style={{ margin: '0 1em' }} />
                <SubMenu
                    title={
                        <span className='submenu-title-wrapper'>
                            <Avatar size='large' shape='circle' style={{ color: 'white', backgroundColor: colors_bg[colors_random()] }}>{auth.firstname[0]}{auth.lastname[0]}</Avatar>
                        </span>
                    }
                >
                    <Menu.Item key='manageaccount'>Manage your account<Link to='/account' /></Menu.Item>
                    <Menu.Item key='logout'>
                        <Button block type='primary' onClick={handleLogout}>Logout</Button>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </div>
    );
}

export default SignedInLinks;