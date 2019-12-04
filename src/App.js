import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Error404Page from './views/Error404Page';
import LandingPage from './views/LandingPage';
import LoginPage from './views/LoginPage';
import Catalogue from './components/Catalogue';
import Navbar from './components/Navbar';

import './App.css';

const { Footer } = Layout;
function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Layout>
          <Navbar />

          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/catalogue' component={Catalogue} />
            <Route path='/login' component={LoginPage} />
            <Route path='/signup' component={() => <div>Hi</div>} />

            <Route component={Error404Page} />
          </Switch>

          <Footer style={{ textAlign: 'center' }}>AlgoLearn ©2019 Created by Oreoluwa Bimbo-Salami</Footer>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
