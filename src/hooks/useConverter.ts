import { useEffect, useState } from 'react';

import { Currency, RateApi } from '../types';
import { getConversionRate } from '../services';
import { amountValidation } from '../utils';

export const useConverter = (amount: string, from: Currency, to: Currency) => {
  const [convertedAmount, setConvertedAmount] = useState<number>();
  const [rate, setRate] = useState<number>(0);

  useEffect(() => {
    getConversionRate(from.currency, to.currency)
      .then(async response => {
        const data: RateApi = await response.json();
        const rate = data.rates[to.currency];
        setRate(rate);

        const result = convertCurrencies(amount, rate);
        setConvertedAmount(result);
      })
      .catch(error => {
        console.error('An error occurred while trying to convert data', error);
      });
  }, [from, to]);

  useEffect(() => {
    const result = convertCurrencies(amount, rate);
    setConvertedAmount(result);
  }, [amount]);

  return { convertedAmount, rate };
};

export const convertCurrencies = (amount: string, rate: number) => {
  if (amountValidation(amount) && rate) {
    return parseFloat(amount) * rate;
  }
};
