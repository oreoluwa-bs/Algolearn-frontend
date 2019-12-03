import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import LandingPageNavbar from '../components/Navbar/LandingPageNavbar';
import LandingPage from '../components/LandingPage';
import Catalogue from '../components/Catalogue';
// import Error404Page from './Error404Page';

const { Footer } = Layout;

class MainPage extends Component {
    render() {
        // <Route path='/' component={LandingPage} />
        // <Route path='/catalogue' component={Catalogue} />
        return (
            <Layout className="layout maincontainer" >
                <LandingPageNavbar />
                {this.props.children}
                <Footer style={{ textAlign: 'center' }}>AlgoLearn ©2019 Created by Oreoluwa Bimbo-Salami</Footer>
            </Layout>
        );
    }
}

export default MainPage;