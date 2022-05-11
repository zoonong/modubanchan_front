import React, { useState, useEffect } from "react";
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect,
  } from "react-router-dom";
import Home from "../routes/Home";
import Auth from "../routes/Auth";
import MyPage from "../routes/MyPage";


const AppRouter = ({ isLoggedIn }) => {
    return (
      <Router>
        <Switch>
          {isLoggedIn ? (
            <>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/profile">
                <MyPage />
              </Route>
              <Redirect from="*" to="/" />
            </>
          ) : (
            <>
              <Route exact path="/">
                <Auth />
              </Route>
              <Redirect from="*" to="/" />
            </>
          )}
        </Switch>
      </Router>
    );
  };
  
  export default AppRouter;