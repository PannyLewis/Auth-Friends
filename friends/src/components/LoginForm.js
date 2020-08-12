import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import WelcomeFriends from "./WelcomeFriends";

const LoginForm = () => {
  return (
    <Router>
      <div className="loginform">
        {/* <h1>Friends of a Feather</h1>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul> */}

        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/protected" component={WelcomeFriends} />
        </Switch>
      </div>
    </Router>
  );
};

export default LoginForm;
