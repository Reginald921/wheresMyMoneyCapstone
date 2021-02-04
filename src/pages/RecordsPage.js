import React, { useState, Fragment, useContext } from "react";

import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
const RecordsPage = () => {
  const { expenses, removeExpense, editExpense } = useContext(GlobalContext);

  const colors = [
    "#70B0FA",
    "#3D6BD4",
    "#3D36B2",
    "#7DEBD9",
    "#00A7BD",
    "#017991",
    "#C996BF",
    "#850A4D",
    "#600336"
  ];

  return (
    <Fragment>
      <div className="pageContainer background_skyblue ">
        <h1 className=" ">Record Expenses</h1>
        <br />
        <hr />
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.length > 0 ? (
              <Fragment>
                {expenses.map((expenses) => (
                  <tr key={expenses.id}>
                    <td>{expenses.date}</td>
                    <td>{expenses.type}</td>
                    <td>{expenses.description}</td>
                    <td>{expenses.amount}</td>
                    <td>
                      <Link to={`/edit/${expenses.id}`}>
                        <button className="font-18">Edit</button>
                      </Link>
                      <button
                        onClick={() => removeExpense(expenses.id)}
                        className="font-18"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </Fragment>
            ) : (
              <p className="center">No Data</p>
            )}
          </tbody>
        </table>
      </div>
      <div className=" ">
        <BarChart width={600} height={300} data={expenses} barCategoryGap="1%">
          <CartesianGrid strokeDasharray="3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend iconType="circle" />
          <Bar dataKey="amount">
            {expenses.map((entry, index) => (
              <Cell fill={colors[index]} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </Fragment>
  );
};
export default RecordsPage;
