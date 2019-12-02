import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './views/MainPage';
import './App.css';
import Error404Page from './views/Error404Page';

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route component={Error404Page} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
