import React, { createContext, FC, useContext, useState } from "react";
import { FILTER_ALL_ID } from "../types/constants";

interface MyStoreContext {
  filter: number[];
  setFilter: (value: number[]) => void;
}

const StoreContext = createContext<MyStoreContext>({
  filter: [FILTER_ALL_ID],
  setFilter: () => {},
});

export const useStoreContext = () => useContext(StoreContext);

export const StoreProvider: FC = ({children}) => {
  const [filter, setFilter] = useState([FILTER_ALL_ID]);

  return (
    <StoreContext.Provider value={{filter, setFilter}}>
      {children}
    </StoreContext.Provider>
  );
};
