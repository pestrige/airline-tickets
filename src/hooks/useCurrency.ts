import { MouseEvent, useState } from "react";
import { CurrenciesName } from "../types/constants";

export const useCurrency = () => {
  const [activeCurrency, setActiveCurrency] = useState<CurrenciesName>(CurrenciesName.RUB);

  const handleClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    setActiveCurrency(evt.currentTarget.dataset.name as CurrenciesName);
  }

  return {activeCurrency, handleClick};
};
