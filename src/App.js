import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path={"/Home"}>
          <p>Welcome to Expense Tracker</p>
        </Route>
        <Route path={"/SignUp"}>
          <SignUp />
        </Route>
        <Route path={"/Login"}>
          <Login />
        </Route>
        <Route path={'*'}>
          <Redirect to={'/Home'}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
