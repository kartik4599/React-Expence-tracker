import React from "react";

const AuthContext = React.createContext({
  id: "",
  addId: (id) => {},
  removeId: () => {},
  isLogin: false,
  email:''
});

export default AuthContext;
