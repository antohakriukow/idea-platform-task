import { convertSnakeToCamelCase } from '../utils';
import { ITicketData } from '../types';
import mockTicketsData from '../mocks/tickets.data.json';

class TicketService {
  private TICKETS_DATA = mockTicketsData.tickets;

  getTickets() {
    return convertSnakeToCamelCase(this.TICKETS_DATA) as ITicketData[];
  }
}

export const ticketService = new TicketService();
