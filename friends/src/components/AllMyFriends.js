import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import FriendsCards from "./FriendsCards";

const AllMyFriends = (props) => {
  return (
    <Router>
      <div>
        <h1>hey there minions</h1>
        <Switch>
          <FriendsCards key={props.friend.id} friend={props.friend} />
        </Switch>
      </div>
    </Router>
  );
};

export default AllMyFriends;
