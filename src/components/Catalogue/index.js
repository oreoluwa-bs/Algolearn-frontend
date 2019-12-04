import React, { Component } from 'react';
// import { Link, Route } from 'react-router-dom';
import { Layout, Input } from 'antd';

const { Search } = Input;

class Catalogue extends Component {
    render() {
        return (
            <Layout className="layout" >
                <div style={{ marginTop: '50px' }}>
                    <div style={{ width: '50vw', margin:'0 auto' }}>
                        <Search
                            placeholder="Search courses for"
                            onSearch={value => console.log(value)}
                            style={{ height: 50 }}
                        />
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Catalogue;