import React, { useState } from "react";
import UserData from "../ApiData/ApiData";

const ExpenseTable = (props) => (
  // const users
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
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.entryId}>
            <td>{user.date}</td>
            <td>{user.type}</td>
            <td>{user.description}</td>
            <td>{user.amount}</td>
            <td>
              <button
                className="button muted-button font-18 mar_5"
                onClick={() => props.editRow(user)}
              >
                Edit
              </button>
              <button
                className="button muted-button font-18 mar_5"
                onClick={() => props.deleteUser(user.entryId)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={5}>No Students</td>
        </tr>
      )}
    </tbody>
  </table>
);
export default ExpenseTable;
