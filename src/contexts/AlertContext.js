import React, { createContext, useContext, useEffect, useState } from "react";

const AlertContext = createContext();

export const useAlert = () => useContext(AlertContext);

export const AlertProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);

  const addAlert = (message, type) => {
    setAlerts([...alerts, { message, type }]);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (alerts.length > 0) {
        setAlerts((prevAlerts) => prevAlerts.slice(1));
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [alerts]);

  const removeAlert = () => {
    setAlerts([]);
  };

  return (
    <AlertContext.Provider value={{ alerts, addAlert, removeAlert }}>
      {children}
    </AlertContext.Provider>
  );
};