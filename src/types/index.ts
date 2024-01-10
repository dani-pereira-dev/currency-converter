export interface CurrencyApi {
  [currency: string]: {
    name: string;
    symbol: string;
  };
}

export interface Currency {
  currency: string;
  name: string;
  symbol: string;
}

export interface RateApi {
  date: string;
  base: string;
  rates: {
    [symbol: string]: number;
  };
}
