import React from "react";
import SignUpForm from "../forms/SignUpForm";
import AddUser from "../components/shared/AddUser";

const SignUpPage = () => {
  return (
    <div className="background_skyblue bg-view">
      <h1 className="text-center ">Sign-Up</h1>
      <br />
      <div>
        <SignUpForm AddUser={AddUser} />
      </div>
    </div>
  );
};

export default SignUpPage;
