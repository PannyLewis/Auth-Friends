import React from "react";
import LoginForm from "./LoginForm";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

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
