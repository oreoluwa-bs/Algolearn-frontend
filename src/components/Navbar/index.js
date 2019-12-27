import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Button, Icon } from 'antd';
import SignedInLinks from './SignedIn/SignedInLinks';
import SignedOutLinks from './SignedOut/SignedOutLinks';
import SignedInDrawer from './SignedIn/SignedInDrawer';
import SignedOutDrawer from './SignedOut/SignedOutDrawer';
import { AuthContext } from '../../store/Contexts/auth';
import '../../styles/navbar.css';

const { Header } = Layout;

const Navbar = () => {
    const { auth } = useContext(AuthContext);
    const [drawerState, setDrawerState] = useState(false);


    const showDrawer = () => setDrawerState(true);

    const onCloseDrawer = () => setDrawerState(false);

    return (
        <Header>
            <Link to='/'><div className="logo" /></Link>

            <div style={{ float: 'right' }}>
                <Button className="barsMenu" type="link" onClick={showDrawer}>
                    <Icon type="menu" />
                </Button>
            </div>

            {
                auth ?
                    <div>
                        <SignedInLinks />
                        <SignedInDrawer onClose={onCloseDrawer} visible={drawerState} />
                    </div>
                    :
                    <div>
                        <SignedOutLinks />
                        <SignedOutDrawer onClose={onCloseDrawer} visible={drawerState} />
                    </div>
            }
        </Header>
    );
}

export default Navbar;