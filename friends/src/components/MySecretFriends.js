import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendsCards from "./FriendsCards";

// const MySecretFriends = () => {
//   return <div>All my little minions!</div>;
// };

// export default MySecretFriends;

class MySecretFriends extends React.Component {
  constructor() {
    super();
    this.state = { secretFriends: [] };
  }

  componentDidMount() {
    axiosWithAuth()
      .get("/api/friends")
      .then((response) => {
        console.log(response);
        this.setState({
          secretFriends: response.data,
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
          <FriendsCards
            key={this.state.secretFriends.id}
            secretFriends={this.state.secretFriends}
          />
        </div>
      </div>
    );
  }
}

export default MySecretFriends;
