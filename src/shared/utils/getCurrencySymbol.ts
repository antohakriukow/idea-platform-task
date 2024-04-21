import { Currency } from '../types';

export const getCurrencySymbol = (currency: Currency) => {
  switch (currency) {
    case Currency.RUB:
      return '₽';
    case Currency.EUR:
      return '€';
    case Currency.USD:
      return '$';
  }
};
