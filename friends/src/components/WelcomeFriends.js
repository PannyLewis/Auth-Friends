import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendsCards from "./FriendsCards";

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
      <div className="friendsPage">
        <div className="header">
          <h1>Welcome Friends</h1>
          <nav>
            <a>Friends</a>
            <a>Add Friends</a>
            <a>Log out</a>
          </nav>
        </div>

        <div className="friendsCards">
          {this.state.dataFriends.map((friend) => (
            <FriendsCards key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    );
  }
}

export default WelcomeFriends;
