import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import AllMyFriends from "./AllMyFriends";
import AddAFriends from "./AddAFriends";
import LogOut from "./LogOut";

// const MydataFriends = () => {
//   return <div>All my little minions!</div>;
// };

// export default MydataFriends;

class WelcomeFriends extends React.Component {
  constructor() {
    super();
    this.state = { dataFriends: [] };
  }

  componentDidMount() {
    axiosWithAuth()
      .get("/api/friends")
      .then((response) => {
        console.log(response);
        this.setState({
          dataFriends: response.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Router>
        <div className="friendsPage">
          <div className="header">
            <h2>Welcome Fair Weathered Friends</h2>
            <nav>
              <Link to="/AllMyFriends">All My Friends</Link>
              <Link to="/Add A Friends">Add A Friend</Link>
              <Link to="/Log Out">Log out</Link>
            </nav>
          </div>

          <div className="friendsCards">
            <Switch>
              {this.state.dataFriends.map((friend) => (
                <AllMyFriends key={friend.id} friend={friend} />
              ))}

              <Route path="/Add A Friends" component={AddAFriends} />
              <Route path="/Log Out" component={LogOut} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default WelcomeFriends;
