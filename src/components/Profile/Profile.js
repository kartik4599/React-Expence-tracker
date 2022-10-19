import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/auth-context";
import classes from "./Profile.module.css";

const Profile = () => {
  const cxt = useContext(AuthContext);
  const nameRef = useRef();
  const photoRef = useRef();

  useEffect(() => {
    const getData = async () => {
      try {
        const val = {
          idToken: cxt.id,
        };

        const res = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyA9lLIJ70sceZJlxaMyrLjucZ-tMTKALK0",
          {
            method: "POST",
            body: JSON.stringify(val),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (res.ok) {
          const data = await res.json();
          nameRef.current.value = data.users[0].displayName;
          photoRef.current.value = data.users[0].photoUrl;
        } else {
          const data = await res.json();
          alert(data.error.message);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [cxt.id]);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(cxt);
    const val = {
      idToken: cxt.id,
      displayName: nameRef.current.value,
      photoUrl: photoRef.current.value,
      returnSecureToken: true,
    };
    try {
      const res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA9lLIJ70sceZJlxaMyrLjucZ-tMTKALK0",
        {
          method: "POST",
          body: JSON.stringify(val),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.ok) {
        const data = await res.json();
        console.log(data);
      } else {
        const data = await res.json();
        alert(data.error.message);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={classes.profile}>
      <div>
        <h2>Contact Detail</h2>
        <Link to="/Home">
          <button> Cancle</button>
        </Link>
      </div>
      <form onSubmit={submitHandler}>
        <span>
          <label>Full Name -</label>
          <input ref={nameRef} type="text" required />
        </span>
        <span>
          <label>Profile Photo Url -</label>
          <input ref={photoRef} type="text" required />
        </span>
        <br />
        <span>
          <button>Submit</button>
        </span>
      </form>
    </div>
  );
};

export default Profile;
