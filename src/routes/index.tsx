import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './privateRoute';
import Login from '../pages/Login';
import Home from '../pages/Home';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
