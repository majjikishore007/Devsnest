import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthProvider, AuthContest } from "../day24/Store";
import Home from "./Home";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useContext(AuthContest);
  console.log("private", isAuthenticated);
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to='/' />
      }
    />
  );
};

export default PrivateRoute;
