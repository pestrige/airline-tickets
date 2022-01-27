import { CurrenciesName } from "../types/constants";
import { Rates } from "../types/types";

const CurrencyLabel = {
  [CurrenciesName.RUB]: '₽',
  [CurrenciesName.USD]: '$',
  [CurrenciesName.EUR]: '€',
}

export const formatPrice = (value: number, rates: Rates, activeCurrency: CurrenciesName) => {
  const result = value * rates[activeCurrency];
  const formattedPrice = Math.ceil(result).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return `${formattedPrice} ${CurrencyLabel[activeCurrency]}`
};
