import React from "react";
// import fallingCash from "../images/fallingCash.jpg";
import LoginForm from "../forms/LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div
      // fix background image
      className=" pageContainer  "
      // style={{ backgroundImage: `url(${fallingCash})` }}
    >
      <div className="flex-endRight mar_30">
        <button className=" ">
          <Link to="/signup">Sign-Up</Link>
        </button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className=" mar_30">
        <h1>Where is</h1>
        <h1>My Money</h1>
        <h1>Going???</h1>
      </div>
      <div>
        <LoginForm />
        {/* on submit verify user in array 
        if not there error alert message ask for valid user/pass
        if there goto main page */}
      </div>
    </div>
  );
};

export default LoginPage;