import React, { Fragment, useState, useContext } from "react";
import { GlobalContext } from "../forms/context/GlobalState";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const ExpensesForm = () => {
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const { addExpense, expenses } = useContext(GlobalContext);

  let history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: expenses.length + 1,
      // username: expenses.username,
      // password: expenses.password,
      date,
      type,
      description,
      amount
    };
    addExpense(newExpense);
    history.push("/records");
    console.log(newExpense);
  };

  return (
    <Fragment>
      <div>
        <form className="center" onSubmit={onSubmit}>
          <div>
            <hr />
            <br />
            <label>
              Date:
              <input
                type="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>
            <br />
            <label>
              Type:
              <select
                required
                value={expenses.type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">Select Type</option>
                <option value="food">food</option>
                <option value="bills">bills</option>
                <option value="entertainment">entertainment</option>
                <option value="charity">charity</option>
                <option value="misc.">misc.</option>
              </select>
            </label>
            <br />
            <label>
              Description:
              <input
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <br />
            <label>
              Amount:
              <input
                // change to numerical
                type="txt"
                name="amount"
                // currency="USD"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </label>
            <br />
            <br />
            <br />
            <hr />
          </div>
          <div>
            <button className=" ">Submit</button>
          </div>
          <div>
            <Link to="/">Cancel</Link>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </form>
      </div>
    </Fragment>
  );
};
export default ExpensesForm;
