import { createContext, useState, useEffect } from "react";
import { data } from "../assets/data";

export const StorageContext = createContext();

const StorageContextProvider = (props) => {
  const [people, setPeople] = useState({ cols: [], data: [] });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
    setPeople(JSON.parse(localStorage.getItem("data")));
  }, []);

  return (
    <StorageContext.Provider value={{ people }}>
      {props.children}
    </StorageContext.Provider>
  );
};

export default StorageContextProvider;
