import { createContext, FC, useContext, useEffect, useState } from "react";
import { CurrenciesName } from "../types/constants";
import { Rates } from "../types/types";
import { getRates } from "../helpers/getRates";

const DEFAULT_RATES = {
  [CurrenciesName.RUB]: 1,
  [CurrenciesName.USD]: 0.012667,
  [CurrenciesName.EUR]: 0.011217,
};

interface MyCurrencyStore {
  rates: Rates;
  activeCurrency: CurrenciesName;
  setActiveCurrency: (value: CurrenciesName) => void;
}

const CurrencyStore = createContext<MyCurrencyStore>({
  rates: DEFAULT_RATES,
  activeCurrency: CurrenciesName.RUB,
  setActiveCurrency: () => {},
});

export const useCurrencyStoreContext = () => useContext(CurrencyStore);

export const CurrencyStoreProvider: FC = ({children}) => {
  const [activeCurrency, setActiveCurrency] = useState<CurrenciesName>(CurrenciesName.RUB);
  const [currencies, setCurrencies] = useState(DEFAULT_RATES);

  useEffect(() => {
    getRates().then((data) => {
      setCurrencies((prev) => ({...prev, [CurrenciesName.USD]: data.USD, [CurrenciesName.EUR]: data.EUR}))
    });
  }, []);

  return (
    <CurrencyStore.Provider value={{
      rates: currencies,
      activeCurrency,
      setActiveCurrency,
    }}>
      {children}
    </CurrencyStore.Provider>
  )
};
