import React from "react";
// import fallingCash from "../images/fallingCash.jpg";
import LoginForm from "../forms/LoginForm";
import { Link } from "react-router-dom";
import MyNavbar from "../components/shared/MyNavbar";

const LoginPage = () => {
  const adminUser = {};
  return (
    // <div
    //   // fix background image
    //   className=" pageContainer  "
    //   // style={{ backgroundImage: `url(${fallingCash})` }}
    // >
    // <div className="pageContainer">
    <div
      className="background_img"
      // className="full-bg-size-img"
      style={{
        backgroundImage: `url(https://t4.ftcdn.net/jpg/00/52/25/05/360_F_52250599_4kzEbc06mYCRbz8cMLSwKEzQQB98uauo.jpg)`
      }}
    >
      <div className="title_container ">
        <MyNavbar />
        <div className="flex-endRight mar_30">
          <button className=" ">
            <Link to="/signup">Sign-Up</Link>
          </button>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
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
        <br />
        <br />
        <br />
      </div>
    </div>
    // </div>
  );
};

export default LoginPage;
