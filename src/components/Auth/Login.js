import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import classes from "./SignUp.module.css";

const Login = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const history = useHistory();
  const [isLoading, setLoading] = useState(false);


  const onSign=()=>{
    history.replace('/SignUp');
  }

  const sumbitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA9lLIJ70sceZJlxaMyrLjucZ-tMTKALK0",
        {
          method: "POST",
          body: JSON.stringify({
            email: emailRef.current.value,
            password: passRef.current.value,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.ok) {
        const data = await res.json();
        const send = {
          id: data.idToken,
          email: emailRef.current.value,
        };
        localStorage.setItem("login", JSON.stringify(send));
        console.log(send);
        history.replace("/Home");
      } else {
        const data = await res.json();
        alert(data.error.message);
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  return (
    <center className={classes.center}>
      <div className={classes.SignUp}>
        <h2>Login</h2>
        <form onSubmit={sumbitHandler}>
          <input ref={emailRef} type="email" placeholder="E-mail" required />
          <br />
          <input
            ref={passRef}
            type="password"
            placeholder="Password"
            required
          />
          <br />
          <button>Login</button>
          <p>forgot password</p>
        </form>
      </div>
      {isLoading && <p>Loading...</p>}
      <div className={classes.login}>
        <p onClick={onSign}>I don't have an account ? SignUp</p>
      </div>
    </center>
  );
};

export default Login;
