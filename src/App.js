import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { logout, login, selectUser } from "./features/userSlice";

function App() {
  const users = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
      return unsubscribe;
    });
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        {users ? (
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        ) : (
          <LoginScreen />
        )}
      </Router>
    </div>
  );
}

export default App;
