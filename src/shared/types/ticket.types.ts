import { Carrier } from './carrier.types';
import { Origin } from './origin.types';

export interface ITicketData {
  origin: Origin;
  originName: string;
  destination: Origin;
  destinationName: string;
  departureDate: string;
  departureTime: string;
  arrivalDate: string;
  arrivalTime: string;
  carrier: Carrier;
  stops: number;
  price: number;
}

export interface ITicket extends ITicketData {
  priceUSD: number;
  priceEUR: number;
}
