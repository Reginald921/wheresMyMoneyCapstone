import React, { useState } from "react";
import SignUpForm from "../forms/SignUpForm";
import FormSuccess from "../FormSuccess";
import MyNavbar from "../components/shared/MyNavbar";

const SignUpPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div className="pageContainer">
      <div
        className="background_img"
        style={{
          backgroundImage: `url(https://media.istockphoto.com/photos/falling-large-group-of-money-of-american-dollar-bills-over-sky-picture-id1160243920?k=6&m=1160243920&s=170667a&w=0&h=57EI4fnQ9JDyUuFcCNvTLxEikhKaVw78oCI5OT-bHOA=)`
        }}
      >
        <MyNavbar />
        <h1 className="text-center ">Sign-Up</h1>

        <div>
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
