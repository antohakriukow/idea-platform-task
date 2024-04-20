import { ITicket, ITicketData } from '../types/ticket.types';
import { IExchangeRates } from './../types/exchange.types';

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
