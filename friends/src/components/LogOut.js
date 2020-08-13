import React from "react";

const LogOut = (props) => {
  const logoff = () => {
    localStorage.removeItem("token");
    props.history.push("/login");
  };

  return (
    <div>
      <h1>friends to the end</h1>
      <button onClick={logoff}>Logout</button>
    </div>
  );
};

export default LogOut;
