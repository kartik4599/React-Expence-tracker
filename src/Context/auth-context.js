import React from "react";

const AuthContext = React.createContext({
  id: "",
  addId: (id) => {},
  removeId: () => {},
  isLogin: false,
});

export default AuthContext;
