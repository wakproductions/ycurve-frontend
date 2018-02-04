import 'bootstrap';
require('../stylesheets/style.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { Provider } from 'react-redux';
import YieldCurveChartPage from './YieldCurveChartPage';

const NotFoundError = () => <h1>404 Not Found</h1>;

const App = () => (
  <div className="app-content">
    <Switch>
      <Route path="/" component={YieldCurveChartPage} />
      <Route component={NotFoundError} />
    </Switch>
  </div>
);

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'));
