import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from '../containers/Main';
import MetaMaskNotDetected from '../containers/MetaMaskNotDetected';
import MetaMaskNotLoggedIn from '../containers/MetaMaskNotLoggedIn';

const routes = (
  <Router>
    <Route path="/" component={Main} />
    <Route path="/no-metamask" component={MetaMaskNotDetected} />
    <Route path="/no-user-logged-in" component={MetaMaskNotLoggedIn} />
  </Router>
);

export default routes;
