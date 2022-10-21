import { useEffect, useReducer } from "react";
import AuthContext from "./auth-context";

const AuthProvider = (props) => {
  const deafultAuth = {
    id: "",
    isLogin: false,
    email: "",
  };

  const authReducer = (state, action) => {
    if (action.type === "Add") {
      localStorage.setItem("login", JSON.stringify(action.id));
      console.log("done");
      return {
        id: action.id.id,
        isLogin: true,
        email: action.id.email,
      };
    }
    if (action.type === "Remove") {
      localStorage.removeItem("login");
      return {
        id: "",
        isLogin: false,
        email: "",
      };
    }

    return deafultAuth;
  };

  const [authState, setAuth] = useReducer(authReducer, deafultAuth);

  const addHandler = (obj) => {
    setAuth({ type: "Add", id: obj });
  };

  const removeHandler = () => {
    setAuth({ type: "Remove" });
  };

  useEffect(() => {
    const hasLogin = JSON.parse(localStorage.getItem("login"));
    console.log(hasLogin);
    if (hasLogin) {
      setAuth({ type: "Add", id: hasLogin });
    }
  }, []);

  const obj = {
    id: authState.id,
    addId: addHandler,
    removeId: removeHandler,
    isLogin: authState.isLogin,
    email: authState.email,
  };

  return (
    <AuthContext.Provider value={obj}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
