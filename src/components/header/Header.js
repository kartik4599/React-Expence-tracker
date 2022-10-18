import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes["header-item"]}>
        <span>HOME</span>

        <div>
          <span>STORE</span>
          <span>ABOUT</span>
          <span>Contact Us </span>
        </div>

        <span>LOGIN</span>
      </div>
    </header>
  );
};

export default Header;
