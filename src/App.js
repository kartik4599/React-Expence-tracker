import { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import AuthContext from "./Context/auth-context";

function App() {
  const cxt = useContext(AuthContext);
  return (
    <div>
      <Header />
      <Switch>
        {cxt.isLogin && (
          <Route path={"/Home"}>
            <Home />
          </Route>
        )}
        {cxt.isLogin && (
          <Route path={"/Profile"}>
            <Profile/>
          </Route>
        )}
        {!cxt.isLogin && (
          <Route path={"/SignUp"}>
            <SignUp />
          </Route>
        )}
        {!cxt.isLogin && (
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
