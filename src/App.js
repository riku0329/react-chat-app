import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "./firebase/firebase.utils";
import { setCurrentUser } from './redux/user/user.actions'

import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";

const App = ({setCurrentUser}) => {
  
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      console.log(user);
    });
  }, []);
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
