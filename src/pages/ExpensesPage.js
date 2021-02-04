import React, { Fragment, useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import ExpenseForm from "../forms/ExpensesForm";

const ExpensesPage = () => {
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const { addExpense, expenses } = useContext(GlobalContext);
  let history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      entryId: expenses.length + 1,
      username: expenses.username,
      password: expenses.password,
      date,
      type,
      description,
      amount
    };
    addExpense(newExpense);
    history.push("/records");
  };

  return (
    <Fragment>
      <div className="background_skyblue  ">
        <div className=" ">Enter Expenses</div>
        <div className=" ">
          {/* <div >{loggedInUser.username}</div> */}
          <ExpenseForm />
        </div>
      </div>
    </Fragment>
  );
};

export default ExpensesPage;
