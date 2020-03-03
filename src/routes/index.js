import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../containers/Main';
import MetaMaskNotDetected from '../containers/MetaMaskNotDetected';
import MetaMaskNotLoggedIn from '../containers/MetaMaskNotLoggedIn';

const routes = (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/no-metamask" component={MetaMaskNotDetected} />
    <Route path="/no-user-logged-in" component={MetaMaskNotLoggedIn} />
  </Switch>
);

export default routes;
