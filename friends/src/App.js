import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import MySecretFriends from "./components/WelcomeFriends";
import PrivateRoute from "./components/PrivateRoute";
import WelcomeFriends from "./components/WelcomeFriends";
import FriendsCards from "./components/FriendsCards";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          {/* <li>
            <Link to="/protected">Welcome Friends</Link>
          </li> */}
          {/* <li>
            <Link to="/addfriend"> Add Friend</Link>
          </li> */}
          {/* <li>
            <Link to="/logout"> Log out</Link>
          </li> */}
        </ul>
        <Switch>
          {/* Protected Route */}
          <PrivateRoute exact path="/protected" component={WelcomeFriends} />
          {/* <PrivateRoute exact path="/addfriend" component={AddFriend} />
          <PrivateRoute exact path="/logout" component={LogOut} /> */}
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
