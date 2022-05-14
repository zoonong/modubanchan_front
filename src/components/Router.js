import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Cart from "../routes/Cart";
import Category from "../routes/Category";
import Feed from "../routes/Feed";
import Home from "../routes/Home";
import MyPage from "../routes/MyPage";
import ProductDetail from "../routes/ProductDetail";
import SignIn from "../routes/SignIn";
import SignUp from "../routes/SignUp";
import Tap from "./Tap";
import "../App.css";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      <div className="tap">
        <Tap isLoggedIn={isLoggedIn} />
      </div>
      <Switch>
        <div className="body">
          <Route exact path="/Cart">
            <Cart />
          </Route>
          <Route exact path="/Category">
            <Category />
          </Route>
          <Route exact path="/Feed">
            <Feed />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/MyPage">
            <MyPage />
          </Route>
          <Route exact path="/ProductDetail">
            <ProductDetail />
          </Route>
          <Route exact path="/SignIn">
            <SignIn />
          </Route>
          <Route exact path="/SignUp">
            <SignUp />
          </Route>
        </div>
      </Switch>
    </Router>
  );
};

export default AppRouter;
