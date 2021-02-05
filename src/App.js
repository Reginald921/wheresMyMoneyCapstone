import React, { useState, useEffect } from "react";
import MyNavbar from "../src/components/shared/MyNavbar";
import "reactstrap/lib/";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import ExpensesPage from "./pages/ExpensesPage";
import SignUpPage from "./pages/SignUpPage";
import RecordsPage from "./pages/RecordsPage";
import { EditExpense } from "./components/EditExpense";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  withRouter,
  BrowserRouter
} from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <>
      <GlobalProvider>
        <Router>
          {/* <MyNavbar /> */}
          <Switch>
            <Route path="/login" exact component={LoginPage} />
            <Route path="/" exact component={MainPage} />
            <Route path="/expenses" exact component={ExpensesPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/records" exact component={RecordsPage} />
            <Route path="/edit/:id" exact component={EditExpense} />
          </Switch>
        </Router>
      </GlobalProvider>
    </>
  );
}

export default App;
