import React, { useState, createContext } from "react";

export const AuthContest = createContext();

export const AuthProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <AuthContest.Provider value={[isAuthenticated, setIsAuthenticated]}>
      {props.children}
    </AuthContest.Provider>
  );
};
