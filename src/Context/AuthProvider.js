import { useEffect, useReducer, useState } from "react";
import AuthContext from "./auth-context";

const AuthProvider = (props) => {

    const [state,setState]=useState(false);


  const deafultAuth = {
    id: "",
    isLogin: false,
  };

  const authReducer = (state, action) => {
    if(action.type==='Add'){
        localStorage.setItem('login',action.id);
        return{
            id:action.id,
            isLogin:true,
        }
    }
    if(action.type==='Remove'){
        localStorage.removeItem('login');
        return{
            id:'',
            isLogin:false,
        }
    }
    
    return deafultAuth;
  };

  const [authState, setAuth] = useReducer(authReducer, deafultAuth);

  const addHandler = (id) => {
    setAuth({ type: "Add", id: id });
    setState(true);
  };

  const removeHandler = () => {
    setAuth({ type: "Remove" });
    setState(true);
  };

  useEffect(()=>{
    const hasLogin=localStorage.getItem('login');
    if(hasLogin){
        setAuth({ type: "Add", id: hasLogin });
    }
  },[]);


  const obj = {
    id: authState.id,
    addId: addHandler,
    removeId: removeHandler,
    isLogin: authState.isLogin,
  };

  return (
    <AuthContext.Provider value={obj}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
