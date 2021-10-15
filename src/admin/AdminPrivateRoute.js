import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("auth_token");
  return <Route {...rest} component={(props) => {
    return token ? <Component {...props} /> : <Redirect to={'/login'} />
  }} />
}

export default PrivateRoute;