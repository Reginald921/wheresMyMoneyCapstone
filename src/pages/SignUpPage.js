import React, { useState } from "react";
import SignUpForm from "../forms/SignUpForm";
import FormSuccess from "../FormSuccess";
import AddUser from "../components/shared/AddUser";
import MyNavbar from "../components/shared/MyNavbar";

const SignUpPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div className="pageContainer">
      <div
        className="full-bg-size-img"
        style={{
          backgroundImage: `url(http://divescheduler.com/wp-content/uploads/2017/08/Depositphotos_9578847_xl-2015.jpg)`
        }}
      >
        <MyNavbar />
        <h1 className="text-center ">Sign-Up</h1>
        <br />
        <div>
          {/* <SignUpForm AddUser={AddUser} /> */}
          {!isSubmitted ? (
            <SignUpForm submitForm={submitForm} />
          ) : (
            <FormSuccess />
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
