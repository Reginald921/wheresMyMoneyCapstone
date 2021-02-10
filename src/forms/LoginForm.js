import React, { useState } from "react";
import useForm from "./useForm";
import validateInfo from "../validateInfo";
import { Link, Redirect } from "react-router-dom";

const LoginForm = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validateInfo
  );
  const [loggedIn, setLoggedIn] = useState(false);

  function login() {
    setLoggedIn(true);
    return;
  }

  return (
    <div>
      <form className="center" onSubmit={handleSubmit} novalidate>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </label>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};
// I need to add username and password to ApiUser array
export default LoginForm;
