import React, { createContext, FC, useContext, useState } from "react";
import { FILTER_ALL_ID } from "../types/constants";

interface MyStoreContext {
  filter: number[];
  setFilter: (value: number[]) => void;
}

const FilterStoreContext = createContext<MyStoreContext>({
  filter: [FILTER_ALL_ID],
  setFilter: () => {},
});

export const useFilterStoreContext = () => useContext(FilterStoreContext);

export const FilterStoreProvider: FC = ({children}) => {
  const [filter, setFilter] = useState([FILTER_ALL_ID]);

  return (
    <FilterStoreContext.Provider value={{filter, setFilter}}>
      {children}
    </FilterStoreContext.Provider>
  );
};
