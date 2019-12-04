import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Button, Icon } from 'antd';
import '../../styles/navbar.css'
import SignedInLinks from './SignedIn/SignedInLinks';
import SignedOutLinks from './SignedOut/SignedOutLinks';
import SignedInDrawer from './SignedIn/SignedInDrawer';
import SignedOutDrawer from './SignedOut/SignedOutDrawer';

const { Header } = Layout;

class Navbar extends Component {
    state = {
        visible: false,
        isAuth: true,
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
                <Link to='/'><div className="logo" /></Link>

                <div style={{ float: 'right' }}>
                    <Button className="barsMenu" type="link" onClick={this.showDrawer}>
                        <Icon type="menu" />
                    </Button>
                </div>

                {
                    this.state.isAuth ?
                        <div>
                            <SignedInLinks />
                            <SignedInDrawer onClose={this.onClose} visible={this.state.visible} />
                        </div>
                        :
                        <div>
                            <SignedOutLinks />
                            <SignedOutDrawer onClose={this.onClose} visible={this.state.visible} />
                        </div>
                }
            </Header>
        );
    }
}

export default Navbar;