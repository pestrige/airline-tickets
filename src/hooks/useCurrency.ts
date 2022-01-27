import { MouseEvent, useState } from "react";
import { CurrenciesName } from "../types/constants";
import { useCurrencyStoreContext } from "../store";

export const useCurrency = () => {
  const { activeCurrency, setActiveCurrency } = useCurrencyStoreContext();

  const handleClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    setActiveCurrency(evt.currentTarget.dataset.name as CurrenciesName);
  }

  return {activeCurrency, handleClick};
};
