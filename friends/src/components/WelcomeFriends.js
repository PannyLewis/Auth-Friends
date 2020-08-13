import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendsCards from "./FriendsCards";

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
        <h2>Welcome Fair Weathered Friends</h2>

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
