import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import styled from "styled-components";
import Login from "./components/Login";
import WelcomeFriends from "./components/WelcomeFriends";
import AddAFriend from "./components/AddAFriend";
import LogOut from "./components/LogOut";

const StyleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: lightblue;
`;

function App() {
  return (
    <div>
      <StyleDiv className="navbar">
        <h1>Friends of A Feather</h1>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/LogOut">Log out</Link>
          <Link to="/AddAFriend">Add A Friend</Link>
          <Link to="/WelcomeFriends">Welcome Friends</Link>
        </nav>
      </StyleDiv>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/LogOut" component={LogOut} />
        <PrivateRoute exact path="/AddAFriend" component={AddAFriend} />
        <PrivateRoute exact path="/WelcomeFriends" component={WelcomeFriends} />
      </Switch>
    </div>

    // Switch hides the path until the link is clicked just a light switch

    // <Router>
    //   <div className="App">
    //     <h1>Friends of a Feather</h1>
    //     <ul>
    //       <li>
    //         <Link to="/login">Login</Link>
    //       </li>
    /* <LoginForm /> */
    /* <li>
            <Link to="/protected">Welcome Friends</Link>
          </li> */
    /* <li>
            <Link to="/addfriend"> Add Friend</Link>
          </li> */
    /* <li>
            <Link to="/logout"> Log out</Link>
          </li> */
    // </ul>
    // <Switch>
    /* Protected Route */
    /* <PrivateRoute exact path="/protected" component={WelcomeFriends} /> */
    /* <PrivateRoute exact path="/addfriend" component={AddFriend} />
          <PrivateRoute exact path="/logout" component={LogOut} /> */
    /* <Route path="/login" component={LoginForm} /> */
    /* <Route component={Login} /> */
    // </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
