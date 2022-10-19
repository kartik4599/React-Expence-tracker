import { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import AuthContext from "../../Context/auth-context";
import classes from "./Header.module.css";

const Header = () => {
  const cxt = useContext(AuthContext);
  const history=useHistory();
  const logoutHandler = () => {
    const logout = window.confirm("Are You Sure");
    if (logout) {
      cxt.removeId();
      history.replace('/Login');
    }
  };

  return (
    <header className={classes.header}>
      <div className={classes["header-item"]}>
        {cxt.isLogin && (
          <NavLink to="/Home" activeClassName={classes.active}>
            <span>Home</span>
          </NavLink>
        )}
        {cxt.isLogin && (
          <NavLink to="/Profile" activeClassName={classes.active}>
            <span>Profile</span>
          </NavLink>
        )}
        {!cxt.isLogin && (
          <NavLink to={"/Login"} activeClassName={classes.active}>
            <span>Login</span>
          </NavLink>
        )}
        {!cxt.isLogin && (
          <NavLink to={"/SignUp"} activeClassName={classes.active}>
            <span>SignUp</span>
          </NavLink>
        )}
        {cxt.isLogin && <span onClick={logoutHandler}>Logout</span>}
      </div>
    </header>
  );
};

export default Header;
