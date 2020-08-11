import React from "react";
import axios from "axios";
import FriendsCards from "./FriendsCards";

// const MySecretFriends = () => {
//   return <div>All my little minions!</div>;
// };

// export default MySecretFriends;

class MySecretFriends extends React.Component {
  constructor() {
    super();
    this.state = { name: "", age: "", email: "" };
  }

  componentDidMount() {
    axios.get().then().catch();
  }

  render() {
    return (
      <div className="friendsPage">
        <div className="header">
          <h1>Welcome Friends</h1>
          <ol>
            <li>Friends</li>
            <li>Add Friends</li>
            <li>Log out</li>
          </ol>
        </div>

        <FriendsCards />
      </div>
    );
  }
}

export default MySecretFriends;
