import 'bootstrap';
require('../stylesheets/style.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { Provider } from 'react-redux';
import ReportsNav from './ReportsNav';

const NotFoundError = () => <h1>404 Not Found</h1>;

const App = () => (
  <div className="app-content">
    <ReportsNav/>                  
    <Switch>
      <Route component={NotFoundError} />
    </Switch>
  </div>
);

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'));
