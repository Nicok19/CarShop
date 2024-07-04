import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <AppContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
