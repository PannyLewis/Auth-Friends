import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import MySecretFriends from "./components/MySecretFriends";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Secret Friends</Link>
          </li>
        </ul>
        <Switch>
          {/* Protected Route */}
          <PrivateRoute exact path="/protected" component={MySecretFriends} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
