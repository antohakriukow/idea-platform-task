import { Currency, ITicket, ITicketData, TypeExchangeRates } from '../types';

const convertPrice = (price: number, exchangeRate: number) =>
  +(price / exchangeRate).toFixed(2);

export const addPricesToTicket = (
  ticket: ITicketData,
  rates: TypeExchangeRates,
): ITicket => {
  const prices: { [key: string]: number } = {
    RUB: ticket.price,
  };

  Object.keys(rates).forEach((currency) => {
    if (currency in rates) {
      prices[currency] = convertPrice(
        ticket.price,
        rates[currency as keyof TypeExchangeRates],
      );
    }
  });

  return {
    ...ticket,
    price: prices as { [key in keyof typeof Currency]: number },
  };
};
