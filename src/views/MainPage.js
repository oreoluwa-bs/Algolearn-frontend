import React, { Component } from 'react';
import { Layout } from 'antd';
import '../styles/landingpage.css';

class MainPage extends Component {
    render() {
        return (
            <Layout className="layout maincontainer" >
                {this.props.children}
            </Layout>
        );
    }
}

export default MainPage;