import { ITicket } from '../types';

export const getTicketKey = (ticket: ITicket) =>
  `${ticket.arrivalDate}-${ticket.arrivalTime}-${ticket.destinationName}`;
