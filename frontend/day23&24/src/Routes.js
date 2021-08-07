import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Dashboard from "./Components/Dashboard";
import Profile from "./Components/Profile";
import { AuthProvider } from "./day24/Store";
import PrivateRoute from "./Components/PrivateRoute";
const Routes = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/about' exact component={About}></Route>
          {/* <Route path='/dashboard' exact component={Dashboard}></Route> */}
          {/* <Route path='/profile' exact component={Profile}></Route> */}
          <PrivateRoute component={Dashboard} path='/dashboard' exact />
          <PrivateRoute component={Profile} path='/profile' exact />
        </Switch>
      </Router>
    </AuthProvider>
  );
};
export default Routes;
