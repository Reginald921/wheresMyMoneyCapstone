import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const initialFormState = {
    firstname: "",
    lastname: "",
    username: "",
    password: ""
  };
  const [user, setuser] = useState(initialFormState);

  const printSignUps = (e) => {
    e.preventDefault();
    // check user
    console.log(user.firstname, user.lastname, user.username, user.password);
  };

  const updateSignUp = (e) => {
    setuser({
      ...user,
      [e.target.name]: e.target.value
    });
  };
  // const handleInputChange = (event) => {
  //   const { username, value } = event.target;
  //   setUser({ ...user, [username]: value });
  // };
  console.log(user);
  return (
    <form className="center" onSubmit={printSignUps}>
      <hr />
      <br />
      <label>
        Firstname:
        <input
          type="text"
          name="firstname"
          value={user.firstname}
          onChange={updateSignUp}
        />
      </label>
      <br />
      <label>
        Lastname:
        <input
          type="text"
          name="lastname"
          value={user.lastname}
          onChange={updateSignUp}
        />
      </label>
      <br />
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={updateSignUp}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={updateSignUp}
        />
      </label>
      <br />
      <br />
      <br />
      <hr />
      {/* <Link to="/main"> */}
      <button>Submit</button>
      {/* </Link> */}
      {/* on submit add entries into ApiInfo array then goto main page */}
    </form>
  );
};
export default SignUpForm;
