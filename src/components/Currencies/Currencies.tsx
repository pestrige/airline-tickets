import React, { FC } from "react";

import { Currency, List, ListItem } from "./Currencies.styled";
import { CurrenciesName } from "../../types/constants";
import { useCurrency } from "../../hooks/useCurrency";

const currencies = [
  {id: 1, name: CurrenciesName.RUB},
  {id: 2, name: CurrenciesName.USD},
  {id: 3, name: CurrenciesName.EUR},
];


export const Currencies: FC = () => {
  const {activeCurrency, handleClick} = useCurrency();

  return (
    <List>
      {currencies.map(({id, name}) => (
        <ListItem key={id.toString()}>
          <Currency
            onClick={handleClick}
            data-name={name}
            isActive={activeCurrency === name}
          >
            {name}
          </Currency>
        </ListItem>
      ))}
    </List>
  );
};
