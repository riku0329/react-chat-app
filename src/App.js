import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import useReactRouter from "use-react-router";

import { auth, createUserProfile } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import WithSpinner from "./components/spinner/with-spinner.component";

const HomeWithSpinner = WithSpinner(Home);

const App = ({ setCurrentUser, currentUser, isLoading }) => {
  const { history } = useReactRouter();
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
        history.push("/");
      } else {
        history.push("/login");
      }
      return () => {
        unsubscribeFromAuth();
      };
    });
  }, [setCurrentUser]);
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <HomeWithSpinner isLoading={isLoading} />}
        />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  isLoading: state.user.isLoading
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
