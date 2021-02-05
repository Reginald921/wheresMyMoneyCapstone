import React, { useState } from "react";

import { Link } from "react-router-dom";
const LoginForm = () => {
  const initialFormState = { id: null, username: "", password: "" };
  const [user, setUser] = useState(initialFormState);
  const [loggedInUser, setLoggedInUser] = useState(initialFormState);

  const printValues = (e) => {
    e.preventDefault();
    // set loggedInUser to username, password
    // check user
    console.log("submit", user.username, user.password);
    console.log("logged", loggedInUser.username);
    console.log("password", loggedInUser.password);
  };

  const updateField = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
    loggedIn();
  };

  const loggedIn = () => {
    setLoggedInUser({
      username: user.username,
      password: user.password
    });
  };

  return (
    <form className="center" onSubmit={printValues}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={updateField}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={updateField}
        />
      </label>
      <br />
      <Link to="/">
        <button>Submit</button>
      </Link>
    </form>
  );
};
// I need to add username and password to ApiUser array
export default LoginForm;
