import React, { Fragment, useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useHistory, Link } from "react-router-dom";

export const EditExpense = (route) => {
  let history = useHistory();
  const { expenses, editExpense } = useContext(GlobalContext);
  const [selectedExpense, setSelectedExpense] = useState({
    id: null,
    date: "",
    type: "",
    description: "",
    amount: ""
  });

  const currentExpenseId = route.match.params.id;

  useEffect(() => {
    const id = currentExpenseId;
    const selectedExpense = expenses.find((exp) => exp.id === parseInt(id));
    setSelectedExpense(selectedExpense);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    editExpense(selectedExpense);
    history.push("/records");
  };

  const handleOnChange = (expenseKey, value) =>
    setSelectedExpense({ ...selectedExpense, [expenseKey]: value });

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
                value={selectedExpense.date}
                onChange={(e) => handleOnChange("date", e.target.value)}
              />
            </label>
            <br />
            <label>
              Type:
              <select
                required
                value={selectedExpense.type}
                onChange={(e) => handleOnChange("type", e.target.value)}
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
                value={selectedExpense.description}
                onChange={(e) => handleOnChange("description", e.target.value)}
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
                value={selectedExpense.amount}
                onChange={(e) => handleOnChange("amount", e.target.value)}
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
            <Link to="/records">Cancel</Link>
          </div>
        </form>
      </div>
    </Fragment>
  );
};
