import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from '../containers/Main';

const routes = (
  <Router>
    <Route path="/" component={Main} />
  </Router>
);

export default routes;
