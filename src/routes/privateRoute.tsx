import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import auth from '../services/auth';

const PrivateRoute: React.FC<RouteProps> = ({ ...props }) => {
  return auth.isAuthenticated() ? (
    <Route {...props} />
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRoute;
