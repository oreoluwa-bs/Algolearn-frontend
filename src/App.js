import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './views/MainPage';
import './App.css';
import Error404Page from './views/Error404Page';
import LandingPage from './components/LandingPage';
import Catalogue from './components/Catalogue';

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Switch>
          
          <Route exact path='/'>
            <MainPage children={<LandingPage />} />
          </Route>
          <Route exact path='/catalogue'>
            <MainPage children={<Catalogue />} />
          </Route>

          <Route component={Error404Page} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
