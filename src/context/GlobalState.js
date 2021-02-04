import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  expenses: [
    {
      id: 1,
      // username: "JohnDoe1",
      // password: "password1",
      date: "01/02/2021",
      type: "food",
      description: "McDonalds value combo",
      amount: 4.57
    },
    {
      id: 2,
      // username: "JohnDoe1",
      // password: "password1",
      date: "12/28/2020",
      type: "bill",
      description: "Car insurance",
      amount: 114.17
    },
    {
      id: 3,
      // username: "JohnDoe1",
      // password: "password1",
      date: "12/20/2020",
      type: "entertainment",
      description: "bowling at Galaxy Lanes",
      amount: 26.81
    },
    {
      id: 4,
      // username: "JohnDoe1",
      // password: "password1",
      date: "11/12/2020",
      type: "charity",
      description: "food drive at work",
      amount: 20.01
    },
    {
      id: 5,
      // username: "JohnDoe1",
      // password: "password1",
      date: "10/02/2020",
      type: "misc",
      description: "table for living room",
      amount: 134.67
    },
    {
      id: 6,
      // username: "JohnDoe1",
      // password: "password1",
      date: "08/02/2020",
      type: "food",
      description: "Burger king value meal value combo",
      amount: 5.87
    },
    {
      id: 7,
      // username: "JohnDoe1",
      // password: "password1",
      date: "02/16/2020",
      type: "bill",
      description: "light bill",
      amount: 265.28
    },
    {
      id: 8,
      // username: "JaneDoe2",
      // password: "password2",
      date: "12/12/2020",
      type: "food",
      description: "Wendys meal combo",
      amount: 8.87
    }
  ]
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function removeExpense(id) {
    dispatch({
      type: "REMOVE_EXPENSE",
      payload: id
    });
  }

  function addExpense(expenses) {
    dispatch({
      type: "ADD_EXPENSE",
      payload: expenses
    });
  }

  function editExpense(expenses) {
    dispatch({
      type: "EDIT_EXPENSE",
      payload: expenses
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        expenses: state.expenses,
        removeExpense,
        addExpense,
        editExpense
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
