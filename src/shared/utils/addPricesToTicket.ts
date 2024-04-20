import { ITicket, ITicketData, IExchangeRates } from '../types';

const convertPrice = (price: number, exchangeRate: number) =>
  +(price / exchangeRate).toFixed(2);

export const addPricesToTicket = (
  ticket: ITicketData,
  rates: IExchangeRates,
): ITicket => ({
  ...ticket,
  priceEUR: convertPrice(ticket.price, rates.eur),
  priceUSD: convertPrice(ticket.price, rates.usd),
});
