import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Auth/Login";
import ResetPass from "./components/Auth/ResetPass";
import SignUp from "./components/Auth/SignUp";
import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import { authAction } from "./Context/auth-redux";

function App() {
  const Auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    const login = localStorage.getItem("login");
    if (login) {
      dispatch(authAction.login(JSON.parse(login)));
    }
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        {Auth.isLogin && (
          <Route path={"/Home"}>
            <Home />
          </Route>
        )}
        {Auth.isLogin && (
          <Route path={"/Profile"}>
            <Profile />
          </Route>
        )}
        {!Auth.isLogin && (
          <Route path={"/SignUp"}>
            <SignUp />
          </Route>
        )}
        {!Auth.isLogin && (
          <Route path={"/ResetPassword"}>
            <ResetPass />
          </Route>
        )}
        {!Auth.isLogin && (
          <Route path={"/Login"}>
            <Login />
          </Route>
        )}
        <Route path={"*"}>
          <Redirect to={"/Home"} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
