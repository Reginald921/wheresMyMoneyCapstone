import React from "react";
// import { fallingCash } from "../images/fallingCash.jpg";
import { Link } from "react-router-dom";

// first filter all entries with correct
// username and password into UserExpenses array

const MainPage = () => (
  <div className="pageContainer">
    <div
      className="full-bg-size-img"
      style={{
        backgroundImage: `url(https://t4.ftcdn.net/jpg/00/52/25/05/360_F_52250599_4kzEbc06mYCRbz8cMLSwKEzQQB98uauo.jpg)`
      }}
    >
      <div className="title_container ">
        <div className="right">
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