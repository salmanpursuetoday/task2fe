import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import RollNumber from './containers/RollNumber';
import Result from './containers/Result';
import Login from './admin/containers/Login';
import AddResult from './admin/containers/AddResult';
import AddStudent from './admin/containers/Student';
import AdminPrivateRoute from './admin/AdminPrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={RollNumber} exact />
        <Route path="/result/:rollNumber" component={Result} exact />
        <Route path="/login" component={Login} exact />
        <AdminPrivateRoute path="/add-result" component={AddResult} exact />
        <AdminPrivateRoute path="/add-student" component={AddStudent} exact />
      </Switch>
    </Router>
  );
}

export default App;
