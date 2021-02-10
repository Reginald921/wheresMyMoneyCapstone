import React, { useState } from "react";
import { Link } from "react-router-dom";
import useForm from "./useForm";
import validate from "../validateInfo";

const SignUpForm = (submitForm) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  const initialFormState = {
    firstname: "",
    lastname: "",
    username: "",
    password: ""
  };
  const [user, setuser] = useState(initialFormState);

  console.log(values);
  return (
    <form className="center" onSubmit={handleSubmit}>
      <hr />
      <br />
      <div className="form-inputs">
        <label>
          Firstname:
          <input
            id="firstname"
            type="text"
            name="firstname"
            placeholder="Enter First name"
            value={values.firstname}
            onChange={handleChange}
          />
          {errors.firstname && <p>{errors.firstname}</p>}
        </label>
      </div>
      <div className="form-inputs">
        <label>
          Lastname:
          <input
            id="lastname"
            type="text"
            name="lastname"
            placeholder="Enter Last name"
            value={values.lastname}
            onChange={handleChange}
          />
          {errors.lastname && <p>{errors.lastname}</p>}
        </label>
      </div>
      <div className="form-inputs">
        <label>
          Username:
          <input
            id="username"
            type="text"
            name="username"
            placeholder="Enter Username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </label>
      </div>
      <div className="form-inputs">
        <label>
          Password:
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter Password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </label>
      </div>
      <div className="form-inputs">
        <label>
          Password:
          <input
            id="password2"
            type="password"
            name="password2"
            placeholder="Confirm Password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </label>
      </div>
      <br />
      <br />
      <hr />
      <Link to="/">
        <button>Sign Up</button>
      </Link>
      {/* on submit add entries into ApiInfo array then goto main page */}
      <br />
      <span>
        Already have an account? Login <a href="#">here</a>
      </span>
      <br />
      <br />
      <br />
      <br />
    </form>
  );
};
export default SignUpForm;
