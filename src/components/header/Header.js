import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes["header-item"]}>
        <span>Home</span>
        <NavLink to={'/Login'} activeClassName={classes.active}>
          <span>Login</span>
        </NavLink>
        <NavLink to={'/SignUp'} activeClassName={classes.active}>
          <span>SignUp</span>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
