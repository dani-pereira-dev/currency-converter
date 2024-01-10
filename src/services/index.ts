import { BASE_API_URL } from '../constants';

export const getCurrencies = async () => fetch(`${BASE_API_URL}/currencies`);

export const getConversionRate = async (from: string, to: string) =>
  fetch(`${BASE_API_URL}/rates?symbols=${to}&base=${from}`);
