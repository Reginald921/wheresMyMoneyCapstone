import React from "react";
import { Link } from "react-router-dom";
import MyNavbar from "../components/shared/MyNavbar";
import loggedInUser from "./LoginPage";
// first filter all entries with correct
// username and password into UserExpenses array
console.log("logged", loggedInUser.username);
const MainPage = () => (
  <div className="pageContainer">
    <div
      className="background_img"
      style={{
        backgroundImage: `url(https://t4.ftcdn.net/jpg/00/52/25/05/360_F_52250599_4kzEbc06mYCRbz8cMLSwKEzQQB98uauo.jpg)`
      }}
    >
      <div className="title_container ">
        <MyNavbar />
        <div className="right">
          <h2>{loggedInUser.username}</h2>
          <h1> WHERE'S MY</h1>
          <h1> MONEY???</h1>
        </div>
      </div>
      <button className="mar_30 ">
        <Link to="/expenses">Enter my Expenses</Link>
      </button>
      <br />
      <div className="center">
        <button className="center mar_30">
          <Link to="/records">Chart my Spending</Link>
        </button>
        <h3>If you want to control you're spending,</h3>
        <br />
        <h3>you have to know what you're buying!</h3>
        <br />
        <br />
        <br />
      </div>
    </div>
  </div>
);

export default MainPage;
