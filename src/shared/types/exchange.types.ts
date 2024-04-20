export const enum Currency {
  RUB = 'RUB',
  EUR = 'EUR',
  USD = 'USD',
}

export type TypeExchangeRates = {
  [key in Exclude<keyof typeof Currency, 'RUB'>]: number;
};
