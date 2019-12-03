import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import MainPage from './views/MainPage';
import './App.css';
import Error404Page from './views/Error404Page';
import LandingPage from './components/LandingPage';
import Catalogue from './components/Catalogue';
import LandingPageNavbar from './components/Navbar/LandingPageNavbar';
import { Layout } from 'antd';

const { Footer } = Layout;
function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Switch>
          <Route exact path='/' component={() => (
            <Redirect to='/home' />
          )} />
          
          <Route path='/home' component={() => (
            <MainPage>
              <LandingPageNavbar />
              <Route component={({ match }) => {
                return (
                  <div>
                    <Route exact path={match.path} component={LandingPage} />
                    <Route path={`${match.path}/catalogue`} component={Catalogue} />
                  </div>
                )
              }} />
              <Footer style={{ textAlign: 'center' }}>AlgoLearn ©2019 Created by Oreoluwa Bimbo-Salami</Footer>
            </MainPage>
          )} />

          <Route path='/other' component={() => <div>Hi</div>} />

          <Route component={Error404Page} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
